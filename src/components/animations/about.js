// about.js

// Import GSAP and ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wait for DOM to fully load before executing
export default function init() {
  // Check if current page is the about page or has about-hero section; exit if not
  const isAboutPage = document.querySelector(".page.about-page") || document.querySelector(".about-hero");
  if (!isAboutPage) return;

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  let scrollTriggerInstances = []; // Store ScrollTrigger instances for cleanup

  // Initialize animations
  const initAnimations = () => {
    // Clean up existing ScrollTrigger instances
    scrollTriggerInstances.forEach((instance) => {
      if (instance) instance.kill();
    });
    scrollTriggerInstances = [];

    // Stats items animation (if stats elements exist)
    const statsElements = document.querySelectorAll(".stats-item-1, .stats-item-2, .stats-item-3");
    if (statsElements.length > 0) {
      // Set initial state for stats items
      gsap.set([".stats-item-1", ".stats-item-2", ".stats-item-3"], {
        scale: 0, // Start scaled down
      });

      // Animate stats items
      const statsAnimation = gsap.to(
        [".stats-item-1", ".stats-item-2", ".stats-item-3"],
        {
          scale: 1, // Scale to full size
          duration: 1, // Animation duration
          stagger: 0.1, // Stagger animations by 0.1s
          ease: "power4.out", // Smooth easing
          scrollTrigger: {
            trigger: ".stats", // Trigger element
            start: "top 50%", // Start when top of stats hits 50% of viewport
            toggleActions: "play none none none", // Play animation on enter
          },
        }
      );
      scrollTriggerInstances.push(statsAnimation.scrollTrigger); // Store instance
    }

    // Background Blobs Floating Animation
    const blobs = document.querySelectorAll(".about-blob");
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 2,
      });
    });

    // About Section Ninja Star Transformation Sequence (Premium Trigger Play)
    const aboutNinjaStarContainer = document.querySelector(".about-ninja-star-container");
    const aboutNinjaStar = document.querySelector(".about-ninja-star");
    const aboutHeroPortrait = document.querySelector(".about-hero-portrait");
    const aboutHeroHeaders = document.querySelectorAll(".about-hero-header h1, .about-hero-header p");
    const aboutBioText = document.querySelector(".about-hero-bio");

    if (aboutNinjaStar && aboutNinjaStarContainer) {
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 20%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      // Phase 1: Arrival (Behind Text)
      aboutTl.to(aboutNinjaStar, {
        left: "120%",
        rotation: 1440,
        duration: 1.8,
        ease: "power2.inOut",
      })
      // Phase 2: The Return (Over the Text)
      .set(aboutNinjaStarContainer, { zIndex: 20 })
      .to(aboutNinjaStar, {
        left: "15%", // Land specifically on the portrait card on the left
        top: "55%",
        rotation: -1080,
        duration: 1.5,
        ease: "expo.out",
      })
      // Phase 3: Transformation into Portrait
      .to(aboutNinjaStar, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power4.in",
      })
      .to(aboutHeroPortrait, {
        opacity: 1,
        scale: 1,
        rotation: -3,
        duration: 1.2,
        ease: "expo.out",
      }, "-=0.2");

      // Refined Text/Bio Reveal
      if (aboutHeroHeaders.length > 0) {
        aboutTl.from(aboutHeroHeaders, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power4.out",
        }, 1.2); 
      }

      if (aboutBioText) {
        aboutTl.from(aboutBioText, {
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        }, "-=0.8");
      }
      scrollTriggerInstances.push(aboutTl.scrollTrigger);
    }
    // Portrait animation (if element exists)
    const portraitElement = document.querySelector(".about-hero-portrait");
    if (portraitElement) {
      // Scroll animation
      const portraitAnimation = gsap.to(".about-hero-portrait", {
        y: -150,
        rotation: -15,
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      scrollTriggerInstances.push(portraitAnimation.scrollTrigger);
    }

      // Tag animations (if elements exist)
      const tag1 = document.querySelector("#tag-1");
      if (tag1) {
        const tag1Animation = gsap.to("#tag-1", {
          y: -300, // Move up by 300px
          rotation: -45, // Rotate -45 degrees
          scrollTrigger: {
            trigger: ".about-copy", // Trigger element
            start: "top bottom", // Start when top of about-copy hits bottom of viewport
            end: "bottom+=100% top", // End after scrolling 100% beyond bottom
            scrub: 1, // Tie animation to scroll position
          },
        });
        scrollTriggerInstances.push(tag1Animation.scrollTrigger); // Store instance
      }

      const tag2 = document.querySelector("#tag-2");
      if (tag2) {
        const tag2Animation = gsap.to("#tag-2", {
          y: -150, // Move up by 150px
          rotation: 70, // Rotate 70 degrees
          scrollTrigger: {
            trigger: ".about-copy", // Trigger element
            start: "top bottom", // Start when top of about-copy hits bottom of viewport
            end: "bottom+=100% top", // End after scrolling 100% beyond bottom
            scrub: 1, // Tie animation to scroll position
          },
        });
        scrollTriggerInstances.push(tag2Animation.scrollTrigger); // Store instance
      }

      const tag3 = document.querySelector("#tag-3");
      if (tag3) {
        const tag3Animation = gsap.to("#tag-3", {
          y: -400, // Move up by 400px
          rotation: 120, // Rotate 120 degrees
          scrollTrigger: {
            trigger: ".about-copy", // Trigger element
            start: "top bottom", // Start when top of about-copy hits bottom of viewport
            end: "bottom+=100% top", // End after scrolling 100% beyond bottom
            scrub: 1, // Tie animation to scroll position
          },
        });
        scrollTriggerInstances.push(tag3Animation.scrollTrigger); // Store instance
      }

      const tag4 = document.querySelector("#tag-4");
      if (tag4) {
        const tag4Animation = gsap.to("#tag-4", {
          y: -350, // Move up by 350px
          rotation: -60, // Rotate -60 degrees
          scrollTrigger: {
            trigger: ".about-copy", // Trigger element
            start: "top bottom", // Start when top of about-copy hits bottom of viewport
            end: "bottom+=100% top", // End after scrolling 100% beyond bottom
            scrub: 1, // Tie animation to scroll position
          },
        });
        scrollTriggerInstances.push(tag4Animation.scrollTrigger); // Store instance
      }

      const tag5 = document.querySelector("#tag-5");
      if (tag5) {
        const tag5Animation = gsap.to("#tag-5", {
          y: -200, // Move up by 200px
          rotation: 100, // Rotate 100 degrees
          scrollTrigger: {
            trigger: ".about-copy", // Trigger element
            start: "top bottom", // Start when top of about-copy hits bottom of viewport
            end: "bottom+=100% top", // End after scrolling 100% beyond bottom
            scrub: 1, // Tie animation to scroll position
          },
        });
        scrollTriggerInstances.push(tag5Animation.scrollTrigger); // Store instance
      }
    // Magnetic Bio Links
    const bioLinks = document.querySelectorAll(".about-hero-bio-links a");
    bioLinks.forEach(link => {
      link.addEventListener("mousemove", (e) => {
        const rect = link.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
        gsap.to(link, { x, y, duration: 0.6, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      });
    });

    // Uniform Size with Depth Blur Loop
    const certTrack = document.querySelector(".cert-track");
    const certContainer = document.querySelector(".cert-slider-container");

    if (certTrack && certContainer) {
      // Clone cards for infinite loop
      const cards = Array.from(certTrack.children);
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        certTrack.appendChild(clone);
      });

      const totalWidth = certTrack.scrollWidth;
      const originalWidth = totalWidth / 2;
      const allCards = certTrack.querySelectorAll(".cert-card");

      const setters = Array.from(allCards).map(card => ({
        filter: gsap.quickSetter(card, "filter"),
        opacity: gsap.quickSetter(card, "opacity")
      }));

      const loop = gsap.to(certTrack, {
        x: -originalWidth,
        duration: 35,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          const containerRect = certContainer.getBoundingClientRect();
          const containerLeft = containerRect.left;
          const containerWidth = containerRect.width;

          allCards.forEach((card, i) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            
            let progress = (cardCenter - containerLeft) / containerWidth;
            
            // Focus on the center area (0.5)
            const focusPoint = 0.5;
            const distFromFocus = Math.abs(progress - focusPoint);

            // Blur: Cards at edges get blurred
            const blur = Math.max(0, (distFromFocus - 0.2) * 15);
            // Opacity: Cards at edges fade slightly
            const opacity = 1 - (distFromFocus * 0.5);

            setters[i].filter(`blur(${blur}px)`);
            setters[i].opacity(opacity);
          });
        }
      });

      // Simple Hover Interaction
      allCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
          loop.pause();
          gsap.to(card, {
            y: -10,
            borderColor: "rgba(108, 99, 255, 0.4)",
            duration: 0.4,
            filter: "blur(0px)",
            opacity: 1,
            overwrite: true
          });
        });
        card.addEventListener("mouseleave", () => {
          loop.play();
          gsap.to(card, {
            y: 0,
            borderColor: "rgba(255, 255, 255, 0.05)",
            duration: 0.4
          });
        });
      });
    }
    // Refresh ScrollTrigger to ensure all markers and triggers are correct
    ScrollTrigger.refresh();
  };

  // Run animations on page load
  initAnimations();

  // Portrait parallax on mouse move — registered once (not inside initAnimations)
  const portraitElement = document.querySelector(".about-hero-portrait");
  if (portraitElement) {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(portraitElement, {
        x: xPos,
        y: yPos,
        rotationY: xPos / 2,
        rotationX: -yPos / 2,
        duration: 1,
        ease: "power2.out",
      });
    });
  }

  // Re-run animations on window resize (debounced to avoid thrashing)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initAnimations, 250);
  });
}