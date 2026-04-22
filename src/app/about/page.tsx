'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  useEffect(() => {
    const loadAnimations = async () => {
      if (typeof window === 'undefined') return;
      const transition = await import('@/components/animations/transition');
      const lenisScroll = await import('@/components/animations/lenis-scroll');
      const menu = await import('@/components/animations/menu');
      const about = await import('@/components/animations/about');
      const footer = await import('@/components/animations/footer');
      const utils = await import('@/components/animations/utils');

      [transition, lenisScroll, menu, about, footer, utils].forEach((module) => {
        if (module?.default) module.default();
      });
    };
    loadAnimations();
  }, []);

  return (
    <>
      <div className="transition">
        <div className="transition-overlay overlay-1"></div>
        <div className="transition-overlay overlay-2"></div>
        <div className="transition-overlay overlay-3"></div>
        <div className="transition-overlay overlay-4"></div>
        <div className="transition-overlay overlay-5"></div>
      </div>

      {/* Shared Navbar */}
      <Navbar />

      <div className="page about-page">
        <h1 className="sr-only">About Anmol Malviya - Full Stack Developer</h1>

        {/* About Hero */}
        <section className="about-hero">

          {/* Background Blobs */}
          <div className="about-blobs">
            <div className="about-blob blob-1"></div>
            <div className="about-blob blob-2"></div>
            <div className="about-blob blob-3"></div>
          </div>

          {/* Ninja Star (animated by about.js) */}
          <div className="about-ninja-star-container">
            <div className="about-ninja-star">
              <svg className="star-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50 0 L61 35 L97 35 L68 57 L79 91 L50 70 L21 91 L32 57 L3 35 L39 35 Z"
                  fill="rgba(255,255,255,0.9)"
                />
              </svg>
            </div>
          </div>

          {/* Hero Header */}
          <div className="about-hero-header">
            <p className="header-fill">Anmol</p>
            <p className="header-outline">Malviya</p>
          </div>

          {/* Main Content */}
          <div className="about-hero-main">

            {/* Bio Card */}
            <div className="about-hero-bio">
              <p className="mn">// Full-Stack Developer & UI/UX Designer</p>
              <p className="ss">
                Hello, I am Anmol Malviya, a dedicated Full Stack Developer and UI/UX Designer based in India. My professional journey is defined by a relentless pursuit of crafting award-winning digital experiences that seamlessly blend engineering precision with compelling visual storytelling. As a specialized React Developer and Next.js expert, I architect robust, highly performant front-end systems that prioritize user experience, accessibility, and modern web standards.
              </p>
              <p className="ss">
                In my role as a Node.js Developer, I engineer scalable, secure backend infrastructures that power complex web applications. From conceptualization to deployment, my comprehensive skill set allows me to manage the entire product lifecycle. My portfolio showcases a diverse range of projects where I have leveraged modern technologies like MongoDB, Express, React, and Node.js (MERN stack) alongside cutting-edge animation libraries like GSAP to deliver interactive, immersive websites.
              </p>
              <p className="ss">
                My approach to development is heavily focused on creating scalable architectures and optimizing performance. As a React Developer, I am adept at state management, component composition, and server-side rendering with Next.js to ensure lightning-fast page loads and superior search engine visibility. On the backend, my experience as a Node.js Developer enables me to design RESTful APIs, manage databases efficiently, and implement secure authentication protocols.
              </p>
              <p className="ss">
                Beyond writing clean, maintainable code, I possess a deep passion for UI/UX design. I believe that exceptional software should not only function flawlessly but also delight users with intuitive interfaces and striking aesthetics. Whether I am optimizing core web vitals for SEO, building responsive layouts, or implementing intricate micro-interactions, my goal is always to create digital products that leave a lasting impact. If you are looking for a Full Stack Developer who bridges the gap between technical excellence and creative design, welcome to my portfolio. Let&apos;s build something extraordinary together.
              </p>
              <div className="about-hero-bio-links">
                <a href="/contact" className="mn">Contact Me →</a>
                <a href="/work" className="mn">View Work →</a>
              </div>
            </div>

            {/* Portrait (revealed by ninja star animation) */}
            <div className="about-hero-portrait">
              <img
                src="/profile.jpeg"
                alt="Anmol Malviya Portrait"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        {/* About Copy Section */}
        <section className="about-copy">
          <div className="about-copy-content">
            <h3>Building the <span>future</span> of the web,</h3>
            <h3>one <span>pixel</span> at a time.</h3>
            <p className="mn">// Based in India · Available Worldwide</p>
          </div>

          <div className="tag" id="tag-1">
            <p className="mn">React</p>
          </div>
          <div className="tag" id="tag-2">
            <p className="mn">Next.js</p>
          </div>
          <div className="tag" id="tag-3">
            <p className="mn">GSAP</p>
          </div>
          <div className="tag" id="tag-4">
            <p className="mn">Node.js</p>
          </div>
          <div className="tag" id="tag-5">
            <p className="mn">UI/UX</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <div className="skills-copy">
            <p className="mn">// Tech Stack</p>
            <h2>What I Work With</h2>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stats-row">
            <div className="stats-header stats-col">
              <p className="mn">// By The Numbers</p>
              <h2>Measurable Impact</h2>
            </div>
            <div className="stats-item-1 stats-col">
              <h2>2+</h2>
              <p className="mn">Years of Experience</p>
            </div>
            <div className="stats-item-2 stats-col">
              <h2>20+</h2>
              <p className="mn">Projects Delivered</p>
            </div>
          </div>
          <div className="stats-row">
            <div className="stats-item-3 stats-col">
              <h2>100%</h2>
              <p className="mn">Client Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* Shared Footer */}
        <Footer />

      </div>
    </>
  );
}
