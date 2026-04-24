// hero.js

// Import GSAP and ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function init() {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Tech Icon Cycling Logic
  const cyclingIcon = document.querySelector(".cycling-tech-icon");
  const techIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", invert: false },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", invert: false },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", invert: false },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", invert: false },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", invert: false },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true }
  ];
  let techIndex = 0;

  if (cyclingIcon) {
    setInterval(() => {
      techIndex = (techIndex + 1) % techIcons.length;
      const icon = techIcons[techIndex];
      cyclingIcon.src = icon.src;
      cyclingIcon.style.filter = icon.invert ? "invert(1)" : "none";
    }, 400); // 400ms cycle
  }

  let scrollTriggerInstance = null; // Stores ScrollTrigger instance for cleanup

  // Hero Header Entrance Animation
  const heroHeaders = document.querySelectorAll(".hero-header .hero-name-word");
  
  // Wait for the cinematic preloader sequence to map 100% and vanish
  document.addEventListener("preloaderComplete", () => {
    if (heroHeaders.length > 0) {
      gsap.from(heroHeaders, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.1, // Reduced delay since preloader is already over
      });
    }
  });

  // Magnetic Social Icons
  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach((icon) => {
    icon.addEventListener("mousemove", (e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(icon, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    });
  });

  // Resume Fetch Logic (Terminal Animation)
  const resumeLink = document.querySelector(".resume-link");
  if (resumeLink) {
    resumeLink.addEventListener("click", (e) => {
      e.preventDefault();
      
      const overlay = document.createElement("div");
      overlay.className = "terminal-overlay";
      overlay.innerHTML = `
        <div class="terminal-content">
          <p class="mn">> INITIALIZING SECURE CONNECTION... </p>
          <p class="mn">> AUTHENTICATING ACCESS... </p>
          <p class="mn">> ACCESS GRANTED. </p>
          <p class="mn">> FETCHING RESUME_FINAL_2026.PDF... </p>
          <div class="terminal-progress-bar"><div class="terminal-fill"></div></div>
          <p class="mn status-text">> DOWNLOADING: 0%</p>
        </div>
      `;
      document.body.appendChild(overlay);

      const tl = gsap.timeline();
      tl.to(".terminal-content p", {
        opacity: 1,
        stagger: 0.4,
        duration: 0.1,
        ease: "none"
      })
      .to(".terminal-fill", {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function() {
          const progress = Math.round(this.progress() * 100);
          const status = document.querySelector(".status-text");
          if (status) status.innerText = `> DOWNLOADING: ${progress}%`;
        }
      })
      .to(overlay, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        onComplete: () => {
          overlay.remove();
          // TODO: Replace with your actual hosted resume PDF path
          window.open("/resume.pdf", "_blank");
        }
      });
    });
  }

  // Initialize animations with ScrollTrigger
  const initAnimations = () => {
    // Kill existing ScrollTrigger instance to prevent duplicates
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
    }

    const isMobile = window.innerWidth <= 1000;
    const initialScale = isMobile ? 0.45 : 0.25;
    const finalScale = 1;
    const initialY = isMobile ? -100 : -110;

    // Create new ScrollTrigger instance
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".hero-img-holder", // Element that triggers animation
      start: "top bottom", // Animation starts when top of trigger hits bottom of viewport
      end: "top top", // Animation ends when top of trigger hits top of viewport
      onUpdate: (self) => {
        const progress = self.progress; // Scroll progress (0 to 1)
        // Animate hero image properties based on scroll progress
        gsap.set(".hero-img", {
          y: `${initialY + Math.abs(initialY) * progress}%`,
          scale: initialScale + (finalScale - initialScale) * progress,
          rotation: -15 + 15 * progress,
        });
      },
    });
  };

  // Run animations on page load
  initAnimations();

  // Re-run animations on window resize (debounced to avoid thrashing)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initAnimations, 250);
  });
}