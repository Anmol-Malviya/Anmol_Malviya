// featured-work.js

// Import GSAP and ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wait for DOM to fully load before executing
export default function init() {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  let scrollTriggerInstance = null; // Stores ScrollTrigger instance for cleanup

  // Initialize animations
  const initAnimations = () => {
    const isMobile = window.innerWidth <= 1000;

    // Kill existing ScrollTrigger instance to prevent duplicates
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
      scrollTriggerInstance = null;
    }

    // Set up featured titles container early (needed for both mobile and desktop)
    const featuredTitles = document.querySelector(".featured-titles");
    const titleWrappers = document.querySelectorAll(".featured-title-wrapper");

    if (isMobile) {
      gsap.set(featuredTitles, { clearProps: "all" });
      gsap.set(titleWrappers, { clearProps: "all" });
    }

    // Create section indicators
    const indicatorContainer = document.querySelector(".featured-work-indicator");
    indicatorContainer.innerHTML = ""; // Clear existing content
    
    if (!isMobile) {
      for (let section = 1; section <= 5; section++) {
      // Add section number
      const sectionNumber = document.createElement("p");
      sectionNumber.className = "mn";
      sectionNumber.textContent = `0${section}`;
      indicatorContainer.appendChild(sectionNumber);
      // Add 10 progress indicators per section
      for (let i = 0; i < 10; i++) {
        const indicator = document.createElement("div");
        indicator.className = "indicator";
        indicatorContainer.appendChild(indicator);
      }
      }
    }

    // Define image card positions for small and large screens
    const featuredCardPosSmall = [
      { y: 100, x: 1000 },
      { y: 1500, x: 100 },
      { y: 1250, x: 1950 },
      { y: 1500, x: 850 },
      { y: 200, x: 2100 },
      { y: 250, x: 600 },
      { y: 1100, x: 1650 },
      { y: 1000, x: 800 },
      { y: 900, x: 2200 },
      { y: 150, x: 1600 },
    ];
    const featuredCardPosLarge = [
      { y: 800, x: 5000 },
      { y: 2000, x: 3000 },
      { y: 240, x: 4450 },
      { y: 1200, x: 3450 },
      { y: 500, x: 2200 },
      { y: 750, x: 1100 },
      { y: 1850, x: 3350 },
      { y: 2200, x: 1300 },
      { y: 3000, x: 1950 },
      { y: 500, x: 4500 },
    ];
    // Select position set based on screen width
    const featuredCardPos =
      window.innerWidth >= 1600 ? featuredCardPosLarge : featuredCardPosSmall;

    const moveDistance = window.innerWidth * 4; // Distance for title movement

    // Official Icon URLs provided by User
    const techIcons = [
      "https://techstack-generator.vercel.app/react-icon.svg",
      "https://techstack-generator.vercel.app/python-icon.svg",
      "https://techstack-generator.vercel.app/js-icon.svg",
      "https://techstack-generator.vercel.app/cpp-icon.svg",
      "https://techstack-generator.vercel.app/webpack-icon.svg",
      "https://techstack-generator.vercel.app/mysql-icon.svg",
      "https://techstack-generator.vercel.app/ts-icon.svg",
      "https://techstack-generator.vercel.app/aws-icon.svg",
      "https://techstack-generator.vercel.app/csharp-icon.svg",
      "https://techstack-generator.vercel.app/django-icon.svg"
    ];

    const techNames = [
      "react", "python", "js", "cpp", "webpack", 
      "mysql", "ts", "aws", "csharp", "django"
    ];

    const techLabels = [
      "Frontend Core", "Backend Logic", "Scripting", "System Level", "Build Tool", 
      "Database", "Type Safety", "Cloud Infra", "Enterprise", "Web Framework"
    ];

    // Create image cards dynamically (Updated for Official Icons)
    const imagesContainer = document.querySelector(".featured-images");
    imagesContainer.innerHTML = ""; // Clear existing content
    for (let i = 1; i <= 10; i++) {
       const featuredImgCard = document.createElement("div");
       featuredImgCard.className = `featured-img-card featured-img-card-${i} tech-${techNames[i-1]}`;
       
       const img = document.createElement("img");
       img.src = techIcons[i - 1];
       img.alt = `${techNames[i - 1]} icon`;
       img.loading = "lazy";
       featuredImgCard.appendChild(img);

       // Add Label
       const label = document.createElement("p");
       label.className = "mn tech-label";
       label.textContent = techLabels[i-1];
       featuredImgCard.appendChild(label);
       
       // Add a shine element for physical reflection
       const shine = document.createElement("div");
       shine.className = "card-shine";
       featuredImgCard.appendChild(shine);
       
       if (!isMobile) {
         // Initial position
         const position = featuredCardPos[i - 1];
         gsap.set(featuredImgCard, {
           x: position.x,
           y: position.y,
         });

         // Magnetic Move Logic
         featuredImgCard.addEventListener("mousemove", (e) => {
           const { left, top, width, height } = featuredImgCard.getBoundingClientRect();
           const mouseX = e.clientX - left;
           const mouseY = e.clientY - top;
           const xPct = mouseX / width - 0.5;
           const yPct = mouseY / height - 0.5;

           // Tilt + Move
           gsap.to(featuredImgCard, {
             rotateX: -yPct * 20,
             rotateY: xPct * 20,
             x: position.x + (xPct * 30),
             y: position.y + (yPct * 30),
             duration: 0.3,
             ease: "power2.out",
             overwrite: "auto"
           });

           // Move Shine
           gsap.to(shine, {
             left: `${mouseX - width/2}px`,
             top: `${mouseY - height/2}px`,
             duration: 0.3,
           });
         });

         featuredImgCard.addEventListener("mouseleave", () => {
           gsap.to(featuredImgCard, {
             rotateX: 0,
             rotateY: 0,
             x: position.x,
             y: position.y,
             duration: 0.8,
             ease: "elastic.out(1, 0.4)"
           });
         });
       } else {
         gsap.set(featuredImgCard, { clearProps: "all" });
       }

       imagesContainer.appendChild(featuredImgCard);
    }

    if (!isMobile) {
      // Initialize image cards with hidden and scaled-down state
      const featuredImgCards = document.querySelectorAll(".featured-img-card");
      featuredImgCards.forEach((featuredImgCard) => {
        gsap.set(featuredImgCard, {
          z: -1500, // Push back in 3D space
          scale: 0, // Scale down to invisible
        });
      });

      // Create ScrollTrigger for animation
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: ".featured-work", // Trigger element
        start: "top top", // Start when top of trigger hits top of viewport
        end: `+=${window.innerHeight * 5}px`, // Extend scroll distance
        pin: true, // Pin section during scroll
        scrub: 1, // Smoothly tie animations to scroll position
        onUpdate: (self) => {
          // Move titles horizontally based on scroll progress
          const xPosition = -moveDistance * self.progress;
          gsap.set(featuredTitles, {
            x: xPosition,
          });

          // Parallax effect for individual title wrappers (Scroll Mirroring)
          const titleWrappers = document.querySelectorAll(".featured-title-wrapper");
          titleWrappers.forEach((wrapper, i) => {
              const speed = 1 + (i * 0.1);
              gsap.set(wrapper, {
                  x: (xPosition * (speed - 1)) / 10, // Subtle secondary movement
                  skewX: self.getVelocity() / 500, // Dynamic skew based on scroll speed
              });
          });

          // Animate image cards (z-position and scale) with stagger
          featuredImgCards.forEach((featuredImgCard, index) => {
            const staggerOffset = index * 0.075; // Delay per card
            const scaledProgress = (self.progress - staggerOffset) * 2; // Adjust progress
            const individualProgress = Math.max(0, Math.min(1, scaledProgress)); // Clamp to [0,1]
            const newZ = -1500 + (1500 + 1500) * individualProgress; // Move from -1500 to 1500
            const scaleProgress = Math.min(1, individualProgress * 10); // Faster scale change
            const scale = Math.max(0, Math.min(1, scaleProgress)); // Clamp scale to [0,1]
            gsap.set(featuredImgCard, {
              z: newZ,
              scale: scale,
            });
          });

          // Update indicator opacity based on scroll progress
          const indicators = document.querySelectorAll(".indicator");
          const totalIndicators = indicators.length;
          const progressPerIndicator = 1 / totalIndicators;
          indicators.forEach((indicator, index) => {
            const indicatorStart = index * progressPerIndicator;
            const indicatorOpacity = self.progress > indicatorStart ? 1 : 0.2;
            gsap.to(indicator, {
              opacity: indicatorOpacity,
              duration: 0.3, // Smooth opacity transition
            });
          });
        },
      });
    }
  };

  // Run animations on page load
  initAnimations();

  // Re-run animations on window resize (debounced to avoid heavy DOM thrashing)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initAnimations, 250);
  });
}