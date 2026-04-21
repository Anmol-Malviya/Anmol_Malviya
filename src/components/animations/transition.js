// transition.js - Next.js Compatible Version
// Uses window.location.href but handles Next.js Link clicks properly

import gsap from "gsap";

export default function init() {

  // Trigger initial reveal transition on page load
  revealTransition();

  // Reveal Transition: Animates overlay scaling down to reveal page
  function revealTransition() {
    return new Promise((resolve) => {
      gsap.set(".transition-overlay", { scaleY: 1, transformOrigin: "top" });
      gsap.to(".transition-overlay", {
        scaleY: 0,
        duration: 0.6,
        stagger: -0.1,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  }

  // Animate Transition: Animates overlay scaling up to cover page
  function animateTransition() {
    return new Promise((resolve) => {
      gsap.set(".transition-overlay", { scaleY: 0, transformOrigin: "bottom" });
      gsap.to(".transition-overlay", {
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
    if (
      (currentPath === "/" || currentPath === "/index.html") &&
      (href === "/" || href === "/index.html" || href === "index.html" || href === "./index.html")
    ) {
      return true;
    }
    const currentFileName = currentPath.split("/").pop() || "index.html";
    const hrefFileName = href.split("/").pop();
    if (currentFileName === hrefFileName) return true;
    return false;
  }

  // Add click event listeners — skip Next.js internal anchor elements
  // Next.js <Link> already handles routing; we only intercept regular <a> tags
  document.querySelectorAll("a").forEach((link) => {
    // Skip if already has a data-transition listener (avoid double-binding on re-renders)
    if (link.dataset.transitionBound) return;
    link.dataset.transitionBound = "true";

    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      // Allow default behavior for external links, mailto, or tel links
      if (
        href &&
        (href.startsWith("http") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:"))
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