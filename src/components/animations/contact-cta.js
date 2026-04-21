// contact-cta.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function init() {
  const contactBtn = document.querySelector(".contact-button");
  const textWrapper = document.querySelector(".contact-text-wrapper");
  const rocketContainer = document.querySelector(".rocket-container");
  const rocketFire = document.querySelector(".rocket-fire");

  if (!contactBtn) return;

  gsap.registerPlugin(ScrollTrigger);

  // Entrance Animation
  gsap.from(contactBtn, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".contact-cta",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Mouse Follow Glow Effect
  contactBtn.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = contactBtn.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    contactBtn.style.setProperty("--x", `${x}%`);
    contactBtn.style.setProperty("--y", `${y}%`);
  });

  contactBtn.addEventListener("mouseleave", () => {
    gsap.to(contactBtn, {
      padding: "2em",
      duration: 0.3,
      ease: "power2.out"
    });
  });


  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Check if already animating to prevent multiple clicks
    if (contactBtn.classList.contains("animating")) return;
    contactBtn.classList.add("animating");

    const tl = gsap.timeline({
      onComplete: () => {
        // Trigger the GSAP tile-reveal transition then navigate
        gsap.set(".transition-overlay", { scaleY: 0, transformOrigin: "bottom" });
        gsap.to(".transition-overlay", {
          scaleY: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.inOut",
          onComplete: () => {
            window.location.href = "/contact";
          }
        });
      }
    });

    // 1. Shrink button to a circle
    tl.to(contactBtn, {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      duration: 0.6,
      ease: "power4.inOut",
      onStart: () => {
        contactBtn.classList.add("transforming");
      }
    })
    // 2. Reveal Rocket
    .to(rocketContainer, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
    }, "-=0.2")
    // 3. Shake before launch
    .to(contactBtn, {
      x: "random(-2, 2)",
      y: "random(-2, 2)",
      duration: 0.05,
      repeat: 10,
      yoyo: true,
      ease: "none"
    })
    // 4. Launch!
    .to(contactBtn, {
      y: -window.innerHeight - 500,
      rotate: "random(-10, 10)",
      duration: 1.5,
      ease: "power4.in",
      onStart: () => {
        contactBtn.classList.add("launching");
      }
    })
    // 5. Fade out effect
    .to(".page.home-page", {
      opacity: 0,
      duration: 0.5
    }, "-=0.5");
  });
}
