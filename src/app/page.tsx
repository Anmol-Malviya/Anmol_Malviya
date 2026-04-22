'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {

  useEffect(() => {
    const loadAnimations = async () => {
      if (typeof window === 'undefined') return;
      const transition = await import('@/components/animations/transition');
      const preloader = await import('@/components/animations/preloader');
      const lenisScroll = await import('@/components/animations/lenis-scroll');
      const utils = await import('@/components/animations/utils');
      const menu = await import('@/components/animations/menu');
      const hero = await import('@/components/animations/hero');
      const featuredWork = await import('@/components/animations/featured-work');
      const services = await import('@/components/animations/services');
      const contactCta = await import('@/components/animations/contact-cta');
      const about = await import('@/components/animations/about');
      const footer = await import('@/components/animations/footer');

      [transition, preloader, lenisScroll, utils, menu, hero, featuredWork, services, contactCta, about, footer].forEach((module) => {
        if (module?.default) module.default();
      });
    };
    loadAnimations();
  }, []);

  return (
    <>
      {/* ================= CINEMATIC PRELOADER ================= */}
      <div id="preloader">
        <div className="preloader-counter">
          <h2 className="mn">0</h2><span>%</span>
        </div>
        <div className="preloader-fill"></div>
        <div className="preloader-bar"></div>
        <div className="preloader-text">Initializing Systems</div>
      </div>

      {/* scroll progress bar */}
      <div className="scroll-progress"></div>

      {/* page transition */}
      <div className="transition">
        <div className="transition-overlay overlay-1"></div>
        <div className="transition-overlay overlay-2"></div>
        <div className="transition-overlay overlay-3"></div>
        <div className="transition-overlay overlay-4"></div>
        <div className="transition-overlay overlay-5"></div>
      </div>

      {/* Shared Navbar */}
      <Navbar />

      <div className="page home-page">
        <h1 className="sr-only">Anmol Malviya — Full Stack Developer &amp; Designer Portfolio</h1>

        {/* home - hero */}
        <section className="hero">
          <div className="hero-header-wrapper">
            <div className="hero-header hero-header-1">
              <p className="hero-name-word" aria-hidden="true">Anmol</p>
            </div>
            <div className="hero-header hero-header-2">
              <p className="hero-name-word" aria-hidden="true">Malviya</p>
            </div>
          </div>
          <div className="hero-footer">
            <div className="hero-footer-symbols">
              <div className="social-icons">
                <a href="https://github.com/Anmol-Malviya" target="_blank" rel="noreferrer" className="social-icon" aria-label="Github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/anmol-malviya27/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://www.instagram.com/anmol_20_7_/?hl=en" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-footer-scroll-down">
              <p className="mn"><a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-link"> Fetch // Resume</a></p>
            </div>
            <div className="hero-footer-tags">
              <p className="mn">Showcase Mode: ON </p>
            </div>
          </div>
        </section>

        {/* home - hero img holder */}
        <section className="hero-img-holder">
          <div className="hero-img">
            <img src="/images/hero/image-1.jpg" alt="Anmol Malviya — full stack developer portfolio preview" />
          </div>
        </section>

        {/* home - about teaser */}
        <section className="about-hero page about-page">
          <div className="about-blobs">
            <div className="about-blob blob-1"></div>
            <div className="about-blob blob-2"></div>
            <div className="about-blob blob-3"></div>
          </div>
          <div className="about-hero-header">
            <p className="header-outline" aria-hidden="true">Hi, I&apos;m</p>
            <p className="header-fill" aria-hidden="true">Anmol</p>
          </div>
          <div className="about-hero-main">
            <div className="about-hero-portrait">
              <img src="/profile.jpeg" alt="Anmol Malviya Portrait" />
            </div>
            <div className="about-hero-bio">
              <p className="ss">
                Hi, I&apos;m Anmol Malviya. I&apos;m a designer and full-stack developer who&apos;s obsessed with creating
                award-worthy digital experiences. From crafting pixel-perfect interfaces
                to architecting robust backend systems, I live at the intersection where
                beautiful design meets clean code.
              </p>
              <p className="mn">Code / Design / Craft / Repeat</p>
            </div>
          </div>
          <div className="about-ninja-star-container">
            <div className="about-ninja-star">
              <svg viewBox="0 0 100 100" className="star-svg">
                <defs>
                  <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#ffffff',stopOpacity:1}} />
                    <stop offset="20%" style={{stopColor:'#a0a0a0',stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:'#ffffff',stopOpacity:1}} />
                    <stop offset="80%" style={{stopColor:'#707070',stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#ffffff',stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <path fill="url(#chrome-grad)" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                <circle cx="50" cy="50" r="8" fill="#050505" />
              </svg>
            </div>
          </div>
        </section>

        {/* home - featured work (Tech Stack Showcase) */}
        <section className="featured-work">
          <div className="featured-images"></div>
          <div className="featured-titles">
            <div className="featured-title-wrapper">
              <p className="featured-title">TECH STACK</p>
            </div>
            <div className="featured-title-wrapper">
              <p className="featured-title">CORE LANGUAGES</p>
            </div>
            <div className="featured-title-wrapper">
              <p className="featured-title">WEB FRAMEWORKS</p>
            </div>
            <div className="featured-title-wrapper">
              <p className="featured-title">CLOUD &amp; DATA</p>
            </div>
            <div className="featured-title-wrapper">
              <p className="featured-title">MODERN TOOLS</p>
            </div>
          </div>
          <div className="featured-work-indicator"></div>
          <div className="featured-work-footer">
            <p className="mn">Project Portfolio [ 10 ]</p>
            <p className="mn">///////////////////</p>
            <p className="mn"><Link href="/work">View All Projects</Link></p>
          </div>
        </section>

        {/* home - services header */}
        <section className="services-header">
          <div className="services-header-content">
            <div className="services-profile-icon">
              <img src="/profile.jpeg" alt="Anmol Malviya&apos;s Portrait" />
            </div>
            <p>Your Vision. My Expertise.</p>
            <div className="services-header-title">
              <p className="services-headline">Full-stack development</p>
              <p className="services-headline">&amp; Design Solutions</p>
            </div>
            <div className="services-header-arrow-icon">
              <p>&#8595;</p>
            </div>
          </div>
        </section>

        {/* home - services/skills section */}
        <section className="services">
          <div className="service-card" id="service-card-1">
            <div className="service-card-inner">
              <div className="service-card-content">
                <p className="services-card-title">Frontend Development </p>
              </div>
              <div className="service-card-img">
                <img src="/images/services/service-1.jpg" alt="Front-End Development" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="service-card" id="service-card-2">
            <div className="service-card-inner">
              <div className="service-card-content">
                <p className="services-card-title">Backend Development</p>
              </div>
              <div className="service-card-img">
                <img src="/images/services/service-2.jpg" alt="Backend Development" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="service-card" id="service-card-3">
            <div className="service-card-inner">
              <div className="service-card-content">
                <p className="services-card-title">UI/UX Design</p>
              </div>
              <div className="service-card-img">
                <img src="/images/services/service-3.jpg" alt="UI/UX Design" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="service-card" id="service-card-4">
            <div className="service-card-inner">
              <div className="service-card-content">
                <p className="services-card-title">Web Applications</p>
              </div>
              <div className="service-card-img">
                <img src="/images/services/service-4.jpg" alt="Web Applications" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* home - contact cta */}
        <section className="contact-cta">
          <Link href="/contact" className="contact-button" aria-label="Get in touch">
            <div className="contact-button-bg"></div>
            <div className="contact-text-wrapper">
              <div className="contact-text-small">
                <p>Let&apos;s build something amazing together</p>
              </div>
              <div className="contact-text-large">
                <p className="contact-cta-heading">Get in touch</p>
              </div>
            </div>
            <div className="rocket-container">
              <svg viewBox="0 0 24 24" className="rocket-svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
                <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
              </svg>
              <div className="rocket-fire"></div>
            </div>
          </Link>
        </section>

        {/* Shared Footer */}
        <Footer />
      </div>
    </>
  );
}
