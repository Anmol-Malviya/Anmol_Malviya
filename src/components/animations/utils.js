// utils.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function init() {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Global Scroll Progress Bar
    const progressBar = document.querySelector(".scroll-progress");
    if (progressBar) {
        gsap.to(progressBar, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3
            }
        });
    }

    // 2. Click to Copy Email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const email = link.href.replace("mailto:", "");
            navigator.clipboard.writeText(email).then(() => {
                const originalText = link.innerText;
                link.innerText = "Email Copied!";
                link.classList.add("copied");
                
                setTimeout(() => {
                    link.innerText = originalText;
                    link.classList.remove("copied");
                }, 2000);
            });
        });
    });
}
