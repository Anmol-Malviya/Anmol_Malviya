"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const isPressed = useRef(false);
  const magneticPos = useRef<{ x: number, y: number, active: boolean }>({ x: 0, y: 0, active: false });

  useGSAP(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    // Set initial states
    gsap.set([outerRef.current, rippleRef.current], {
      xPercent: -50,
      yPercent: -50,
    });

    const xSetterOuter = gsap.quickSetter(outerRef.current, "x", "px");
    const ySetterOuter = gsap.quickSetter(outerRef.current, "y", "px");
    const rotateSetter = gsap.quickSetter(outerRef.current, "rotation", "deg");
    const scaleXSetter = gsap.quickSetter(outerRef.current, "scaleX");
    const scaleYSetter = gsap.quickSetter(outerRef.current, "scaleY");

    const xSetterRipple = gsap.quickSetter(rippleRef.current, "x", "px");
    const ySetterRipple = gsap.quickSetter(rippleRef.current, "y", "px");

    // Multiple trail dots for "liquid" feel
    const trailDots = containerRef.current?.querySelectorAll(".trail-dot");
    const trailSetters = Array.from(trailDots || []).map(dot => ({
      x: gsap.quickSetter(dot, "x", "px"),
      y: gsap.quickSetter(dot, "y", "px")
    }));

    const updateMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target as HTMLElement;
      const hoverTarget = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer, .resume-link');
      isHovering.current = !!hoverTarget;

      // Magnetic Pull Logic
      const magneticTarget = target.closest('[data-magnetic]') as HTMLElement;
      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate the pull strength (closer to center = stronger)
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        magneticPos.current = {
          x: centerX + distanceX * 0.3, // 30% resistance
          y: centerY + distanceY * 0.3,
          active: true
        };
      } else {
        magneticPos.current.active = false;
      }
    };

    const updateClick = (e: MouseEvent) => {
      isPressed.current = e.type === "mousedown";
      if (e.type === "mousedown") {
        xSetterRipple(mouse.current.x);
        ySetterRipple(mouse.current.y);
        gsap.fromTo(rippleRef.current, 
          { scale: 0, opacity: 0.8 },
          { scale: 3, opacity: 0, duration: 0.6, ease: "power2.out" }
        );
      }
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mousedown", updateClick);
    window.addEventListener("mouseup", updateClick);

    const trailPositions = Array(trailSetters.length).fill({ x: 0, y: 0 }).map(() => ({ x: 0, y: 0 }));

    gsap.ticker.add(() => {
      const targetX = magneticPos.current.active ? magneticPos.current.x : mouse.current.x;
      const targetY = magneticPos.current.active ? magneticPos.current.y : mouse.current.y;

      // Delayed outer cursor with lerp
      const dt = 0.15;
      delayedMouse.current.x += (targetX - delayedMouse.current.x) * dt;
      delayedMouse.current.y += (targetY - delayedMouse.current.y) * dt;

      xSetterOuter(delayedMouse.current.x);
      ySetterOuter(delayedMouse.current.y);

      // Liquid Trail logic
      trailPositions.forEach((pos, i) => {
        const target = i === 0 ? { x: targetX, y: targetY } : trailPositions[i - 1];
        pos.x += (target.x - pos.x) * (0.3 - i * 0.04);
        pos.y += (target.y - pos.y) * (0.3 - i * 0.04);
        trailSetters[i].x(pos.x);
        trailSetters[i].y(pos.y);
      });

      // Calculate rotation based on velocity
      const vx = targetX - delayedMouse.current.x;
      const vy = targetY - delayedMouse.current.y;
      const velocity = Math.sqrt(vx * vx + vy * vy);
      
      if (velocity > 0.5) {
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);
        rotateSetter(angle + 135); 
      }

      // Squash and stretch based on velocity
      const stretch = Math.min(velocity * 0.015, 0.5);
      const scaleX = isPressed.current ? 0.7 : (isHovering.current ? 1.0 + stretch : 1 + stretch);
      const scaleY = isPressed.current ? 0.7 : (isHovering.current ? 1.0 - stretch : 1 - stretch);
      
      scaleXSetter(scaleX);
      scaleYSetter(scaleY);

      // Glow effect update
      if (outerRef.current) {
        const glow = isHovering.current 
          ? "drop-shadow(0px 0px 25px rgba(220, 0, 255, 0.9)) drop-shadow(0px 0px 50px rgba(0, 255, 255, 0.6))"
          : "drop-shadow(0px 0px 12px rgba(220, 0, 255, 0.5))";
        (outerRef.current.children[0] as HTMLElement).style.filter = glow;
      }
    });

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mousedown", updateClick);
      window.removeEventListener("mouseup", updateClick);
      document.documentElement.style.cursor = "";
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="cursor-wrapper">
      {/* Click Ripple Effect */}
      <div 
        ref={rippleRef}
        className="fixed pointer-events-none z-[10001] border-2 border-[#ff22ff] rounded-full opacity-0"
        style={{ width: 40, height: 40 }}
      />

      {/* Liquid Ghosting Trail */}
      <div className="hidden md:block fixed pointer-events-none z-[9998] inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="trail-dot absolute pointer-events-none rounded-full bg-gradient-to-tr from-[#ff22ff] to-[#5500aa] blur-[2px]"
            style={{
              width: 14 - i * 1.5,
              height: 14 - i * 1.5,
              opacity: (0.12 - i * 0.015),
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* Lagged outer cursor (Arrow) */}
      <div
        ref={outerRef}
        className="hidden md:block fixed pointer-events-none z-[9999]"
        style={{ width: 32, height: 32, willChange: "transform" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          style={{ transition: "filter 0.3s ease" }}
        >
          <defs>
            <linearGradient id="borderGrad" x1="20%" y1="20%" x2="70%" y2="70%">
              <stop offset="0%" stopColor="#ffee00" />
              <stop offset="25%" stopColor="#ff22ff" />
              <stop offset="60%" stopColor="#cc00ff" />
              <stop offset="100%" stopColor="#5500aa" />
            </linearGradient>
            <linearGradient id="innerGrad" x1="20%" y1="20%" x2="80%" y2="80%">
              <stop offset="0%" stopColor="#090013" />
              <stop offset="50%" stopColor="#17002b" />
              <stop offset="100%" stopColor="#05000a" />
            </linearGradient>
          </defs>
          {/* 3D depth shadow */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="#3b006e"
            stroke="#3b006e"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            transform="translate(2, 6)"
          />
          {/* Main arrow face */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="url(#innerGrad)"
            stroke="#090013"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Holographic wireframe lines */}
          <g stroke="#b833ff" strokeWidth="0.8" opacity="0.4" fill="none">
            <path d="M 33 30 Q 55 35 60 40" />
            <path d="M 35 40 Q 55 45 65 43" />
            <path d="M 30 50 Q 45 50 50 48" />
            <path d="M 28 40 Q 38 45 35 65" />
          </g>
          {/* Neon border */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="none"
            stroke="url(#borderGrad)"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Crisp inner brightness line */}
          <path
            d="M 20 20 L 75 45 L 42 52 L 32 80 Z"
            fill="none"
            stroke="#ffaaf5"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* Gold tip */}
          <circle
            cx="20"
            cy="20"
            r="2.5"
            fill="#fffde0"
            style={{ filter: "drop-shadow(0 0 5px #ffee00) drop-shadow(0 0 10px #ffee00)" }}
          />
        </svg>
      </div>
    </div>
  );
}



