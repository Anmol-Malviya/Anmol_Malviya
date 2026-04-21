// lenis-scroll.js

// Import Lenis for smooth scrolling and GSAP/ScrollTrigger for animations
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wait for DOM to fully load before executing
export default function init() {
  // Determine if device is mobile (width <= 900px)
  let isMobile = window.innerWidth <= 900;

  // ─── Settings factories (single source of truth) ─────────────────────────
  const getMobileSettings = () => ({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1.5,
    infinite: false,
    lerp: 0.05,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: true,
  });

  const getDesktopSettings = () => ({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    lerp: 0.1,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: true,
  });
  // ─────────────────────────────────────────────────────────────────────────

  // Initialize Lenis with settings based on current device type
  let lenis = new Lenis(isMobile ? getMobileSettings() : getDesktopSettings());

  // Update ScrollTrigger on Lenis scroll events
  lenis.on("scroll", ScrollTrigger.update);

  // Integrate Lenis with GSAP's ticker for smooth animation
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Run Lenis animation frame (RAF) with GSAP ticker
  });

  // Disable GSAP lag smoothing to prevent animation delays
  gsap.ticker.lagSmoothing(0);

  // Handle window resize to update scroll settings
  const handleResize = () => {
    const wasMobile = isMobile; // Store previous mobile state
    isMobile = window.innerWidth <= 900; // Update mobile state

    // Reinitialize Lenis only if mobile state changes
    if (wasMobile !== isMobile) {
      lenis.destroy(); // Destroy existing Lenis instance
      lenis = new Lenis(isMobile ? getMobileSettings() : getDesktopSettings());
      lenis.on("scroll", ScrollTrigger.update); // Rebind ScrollTrigger update
    }
  };

  // Add resize event listener to handle mobile/desktop transitions
  window.addEventListener("resize", handleResize);
}