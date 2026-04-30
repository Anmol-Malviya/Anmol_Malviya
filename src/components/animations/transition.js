// transition.js - Next.js Compatible Version
// Uses window.location.href but handles Next.js Link clicks properly

import gsap from "gsap";

export default function init() {
  // Ensure we're on the client
  if (typeof window === "undefined") return;

  // Use a small timeout to ensure DOM is fully ready and painted in Next.js
  setTimeout(() => {
    revealTransition();
  }, 100);

  // Reveal Transition: Animates overlay scaling down to reveal page
  function revealTransition() {
    const overlays = document.querySelectorAll(".transition-overlay");
    if (overlays.length === 0) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // Hide the container after completion so it doesn't block interactions
        gsap.set(".transition", { display: "none" });
      }
    });

    // Initial state check
    tl.set(overlays, { scaleY: 1, transformOrigin: "top" });
    
    // Animate out
    tl.to(overlays, {
      scaleY: 0,
      duration: 0.8,
      stagger: -0.1,
      ease: "expo.inOut",
    });

    // Emergency fallback: If for any reason the animation is stuck, hide the overlay after 2 seconds
    setTimeout(() => {
      const container = document.querySelector(".transition");
      if (container && container.style.display !== "none") {
        container.style.display = "none";
      }
    }, 2000);
  }

  // Animate Transition: Animates overlay scaling up to cover page
  function animateTransition() {
    const overlays = document.querySelectorAll(".transition-overlay");
    if (overlays.length === 0) return Promise.resolve();

    return new Promise((resolve) => {
      gsap.set(".transition", { display: "block" });
      gsap.set(overlays, { scaleY: 0, transformOrigin: "bottom" });
      
      gsap.to(overlays, {
        scaleY: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  }

  // Close mobile menu if open
  function closeMenuIfOpen() {
    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    if (menuToggleBtn && menuToggleBtn.classList.contains("menu-open")) {
      menuToggleBtn.click();
    }
  }

  // Check if link points to the current page
  function isSamePage(href) {
    if (!href || href === "#" || href === "") return true;
    const currentPath = window.location.pathname;
    if (href === currentPath) return true;
    
    // Normalize paths
    const normalizedHref = href.startsWith("/") ? href : `/${href}`;
    const normalizedCurrentPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
    const normalizedTarget = normalizedHref.endsWith("/") ? normalizedHref.slice(0, -1) : normalizedHref;
    
    if (normalizedCurrentPath === normalizedTarget) return true;
    
    return false;
  }

  // Add click event listeners — skip Next.js internal anchor elements
  document.querySelectorAll("a").forEach((link) => {
    // Skip if already has a data-transition listener
    if (link.dataset.transitionBound) return;
    link.dataset.transitionBound = "true";

    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      // Allow default behavior for external links, mailto, or tel links
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        link.getAttribute("target") === "_blank"
      ) {
        return;
      }

      // Prevent navigation for same-page links and close menu
      if (isSamePage(href)) {
        event.preventDefault();
        closeMenuIfOpen();
        return;
      }

      // Perform transition for different page links
      event.preventDefault();
      closeMenuIfOpen();
      animateTransition().then(() => {
        window.location.href = href;
      });
    });
  });
}