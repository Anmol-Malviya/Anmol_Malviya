// preloader.js
import gsap from "gsap";

export default function init() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  // Optional: Only show preloader once per session
  if (sessionStorage.getItem("preloaderShown")) {
    preloader.style.display = "none";
    document.dispatchEvent(new Event("preloaderComplete"));
    return;
  }

  const counterElement = document.querySelector(".preloader-counter h2, .preloader-counter h1");
  const fillElement = document.querySelector(".preloader-fill");
  const barElement = document.querySelector(".preloader-bar");

  // Prevent scrolling while preloader is active
  document.body.style.overflow = "hidden";

  const tl = gsap.timeline({
    onComplete: () => {
      // Allow scrolling again
      document.body.style.overflow = "";
      sessionStorage.setItem("preloaderShown", "true");
      
      // Tell other scripts (like hero.js) to start animations
      document.dispatchEvent(new Event("preloaderComplete"));
    }
  });

  // Counter logic
  let counterObj = { value: 0 };
  
  tl.to(counterObj, {
    value: 100,
    duration: 2.2,
    ease: "power2.inOut",
    onUpdate: () => {
      if (counterElement) {
        counterElement.innerText = Math.round(counterObj.value);
      }
    }
  }, 0)
  // Fill background
  .to(fillElement, {
    height: "100%",
    duration: 2.2,
    ease: "power2.inOut"
  }, 0)
  // Progress bar
  .to(barElement, {
    width: "100%",
    duration: 2.2,
    ease: "power2.inOut"
  }, 0)
  // Final slide up transition
  .to(preloader, {
    y: "-100%",
    duration: 0.8,
    ease: "power3.inOut",
    delay: 0.2
  });
}
