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

  const lines = document.querySelectorAll(".preloader-line span");
  const progressBar = document.querySelector(".preloader-progress-bar");

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

  tl.to(lines, {
    y: "0%",
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.2
  }, 0)
  .to(progressBar, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut"
  }, 0)
  .to(lines, {
    y: "-100%",
    duration: 0.8,
    ease: "power4.in",
    stagger: 0.1
  }, 2)
  .to(preloader, {
    y: "-100%",
    duration: 0.8,
    ease: "power3.inOut"
  }, 2.4);
}
