// menu.js

// Import GSAP library for animations
import gsap from "gsap";

// Wait for DOM to fully load before executing
export default function init() {
  // Select DOM elements
  const menuToggleBtn = document.querySelector(".menu-toggle-btn"); // Menu toggle button
  const navOverlay = document.querySelector(".nav-overlay"); // Navigation overlay
  const openLabel = document.querySelector(".open-label"); // Open menu label
  const closeLabel = document.querySelector(".close-label"); // Close menu label
  const navItems = document.querySelectorAll(".nav-item"); // Navigation items
  let isMenuOpen = false; // Tracks menu state (open/closed)
  let isAnimating = false; // Prevents multiple animations at once
  let scrollY = 0; // Stores scroll position when menu opens

  // --- Magnetic Interaction Logic ---
  const magneticItems = [menuToggleBtn, document.querySelector(".logo")];
  
  magneticItems.forEach(item => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(item, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.6,
        ease: "power2.out"
      });
      
      if (item.querySelector(".menu-toggle-btn-wrapper, a, p")) {
         gsap.to(item.querySelector(".menu-toggle-btn-wrapper") || item.querySelector("a, p"), {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.6,
            ease: "power2.out"
         });
      }
    });
    
    item.addEventListener("mouseleave", () => {
      const innerTarget = item.querySelector(".menu-toggle-btn-wrapper") || item.querySelector("a, p");
      gsap.to([item, innerTarget], {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });

  // Add click event listener to menu toggle button
  menuToggleBtn.addEventListener("click", () => {
    if (isAnimating) return;

    if (!isMenuOpen) {
      isAnimating = true;

      navOverlay.style.pointerEvents = "all";
      menuToggleBtn.classList.add("menu-open");
      scrollY = window.scrollY;
      
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // Animate labels
      gsap.to([openLabel, closeLabel], {
        y: "-1.2rem",
        duration: 0.4,
        ease: "power3.inOut"
      });

      // Show Overlay with premium transition
      gsap.to(navOverlay, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimating = false;
        },
      });

      // Animate nav items with "reveal" style
      gsap.fromTo(navItems, 
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          delay: 0.2
        }
      );

      // Animate footer items
      gsap.to([".nav-footer-item-header", ".nav-footer-item-copy"], {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.5
      });

      isMenuOpen = true;
    }
    else {
      isAnimating = true;

      navOverlay.style.pointerEvents = "none";
      menuToggleBtn.classList.remove("menu-open");
      
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);

      gsap.to([openLabel, closeLabel], {
        y: "0rem",
        duration: 0.4,
        ease: "power3.inOut"
      });

      // Hide Items quickly staggered
      gsap.to(navItems, {
        y: "-50%",
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      });

      // Fade out overlay
      gsap.to(navOverlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.2,
        onComplete: () => {
          gsap.set([navItems, ".nav-footer-item-header", ".nav-footer-item-copy"], {
            opacity: 0,
            y: "100%",
          });
          isAnimating = false;
        },
      });

      isMenuOpen = false;
    }
  });
}