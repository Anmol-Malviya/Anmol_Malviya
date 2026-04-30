'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Work() {
  useEffect(() => {
    const loadAnimations = async () => {
      if (typeof window === 'undefined') return;
      const transition = await import('@/components/animations/transition');
      const lenisScroll = await import('@/components/animations/lenis-scroll');
      const menu = await import('@/components/animations/menu');
      const footer = await import('@/components/animations/footer');

      [transition, lenisScroll, menu, footer].forEach((module) => {
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

      <div className="page work-page">
        <h1 className="sr-only">Selected Works — Anmol Malviya</h1>

        <section className="work-header">
            <div className="work-header-content">
                <div className="work-profile-icon">
                    <img src="/profile.jpeg" alt="Anmol Malviya Portrait" />
                </div>
                <div className="work-header-title">
                    <p className="header-fill">Selected</p>
                    <p className="header-outline">Works</p>
                </div>
                <p className="mn">A collection of projects that define my journey</p>
            </div>

            <div className="work-footer">
                <div className="work-footer-symbols">
                    <img src="/images/global/symbols.png" alt="" />
                </div>
                <div className="work-footer-scroll-down">
                    <p className="mn">( Scroll )</p>
                </div>
            </div>
        </section>

        <section className="work-items">
            <div className="row">
                <a href="https://devmarket-three.vercel.app/" target="_blank" rel="noreferrer" className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/Dev-Market.png" alt="Dev Market - Marketplace Platform" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Dev Market</h2>
                        <div className="work-item-meta">
                            <p className="mn">01</p>
                            <p className="mn">Marketplace / Frontend</p>
                        </div>
                    </div>
                </a>
                <a href="https://minimal-portfolio-zeta-blush.vercel.app/" target="_blank" rel="noreferrer" className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/Minimalportfolio.png" alt="Minimal Portfolio - Designer Portfolio" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Minimal Portfolio</h2>
                        <div className="work-item-meta">
                            <p className="mn">02</p>
                            <p className="mn">Design / Frontend</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="row">
                <a href="https://raw-coder.vercel.app/" target="_blank" rel="noreferrer" className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/AI-Interviewer.png" alt="AI Interviewer - SaaS Platform" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>AI Interviewer</h2>
                        <div className="work-item-meta">
                            <p className="mn">03</p>
                            <p className="mn">Full-Stack / AI</p>
                        </div>
                    </div>
                </a>
                <a href="https://deforastration.vercel.app/" target="_blank" rel="noreferrer" className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/Deforestration.png" alt="Deforestation Tracker - Data Visualization" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Deforestation Tracker</h2>
                        <div className="work-item-meta">
                            <p className="mn">04</p>
                            <p className="mn">Data / Visualization</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="row">
                <a href="https://luxe-vert-eta.vercel.app/" target="_blank" rel="noreferrer" className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/LUX.png" alt="LUX Store - E-commerce Concept" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>LUX Store</h2>
                        <div className="work-item-meta">
                            <p className="mn">05</p>
                            <p className="mn">E-commerce / Design</p>
                        </div>
                    </div>
                </a>
                <a href="https://ogeditor2.onrender.com/" target="_blank" rel="noreferrer" className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/Vedio-Editor-Portfolio.png" alt="Video Editor Portfolio" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Video Editor</h2>
                        <div className="work-item-meta">
                            <p className="mn">06</p>
                            <p className="mn">Video / Tooling</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>

        {/* Shared Footer */}
        <Footer />
      </div>
    </>
  );
}
