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
              
              <div className="bio-content">
                <p className="ss lead">
                  Hello, I am <strong>Anmol Malviya</strong>, a dedicated Full Stack Developer and UI/UX Designer based in India. My journey is defined by a relentless pursuit of crafting award-winning digital experiences that blend engineering precision with compelling visual storytelling.
                </p>
                
                <p className="ss">
                  As a specialized <span className="highlight">React & Next.js expert</span>, I architect robust, highly performant front-end systems that prioritize user experience, accessibility, and modern web standards. 
                </p>

                <p className="ss">
                  In my role as a <span className="highlight">Node.js Developer</span>, I engineer scalable, secure backend infrastructures. My portfolio showcases diverse projects where I leverage the <strong>MERN stack</strong> alongside animation libraries like <strong>GSAP</strong> to deliver interactive, immersive websites.
                </p>

                <p className="ss">
                  Beyond writing clean code, I possess a deep passion for <strong>UI/UX design</strong>. Whether optimizing core web vitals for SEO, building responsive layouts, or implementing micro-interactions, my goal is to create products that leave a lasting impact. Let&apos;s build something extraordinary together.
                </p>
              </div>

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
