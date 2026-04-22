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
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-1.png" alt="Anmol Malviya - Interactive Portfolio built with Next.js and GSAP" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Interactive Portfolio</h2>
                        <div className="work-item-meta">
                            <p className="mn">01</p>
                            <p className="mn">Frontend / GSAP</p>
                        </div>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-2.png" alt="Vyorai AI Interviewer - Full-Stack AI App by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Vyorai AI Interviewer</h2>
                        <div className="work-item-meta">
                            <p className="mn">02</p>
                            <p className="mn">Full-Stack / AI</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-3.png" alt="TaskFlow Data Dashboard Web Design by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>TaskFlow Dashboard</h2>
                        <div className="work-item-meta">
                            <p className="mn">03</p>
                            <p className="mn">Web Design / Data</p>
                        </div>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-4.png" alt="React and Node.js E-Commerce Platform by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>E-Commerce Platform</h2>
                        <div className="work-item-meta">
                            <p className="mn">04</p>
                            <p className="mn">React / Node.js</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-5.png" alt="UI/UX Branding for Creative Agency by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Creative Agency</h2>
                        <div className="work-item-meta">
                            <p className="mn">05</p>
                            <p className="mn">UI/UX / Branding</p>
                        </div>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-6.png" alt="Mobile Web3 FinTech App Development by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>FinTech App</h2>
                        <div className="work-item-meta">
                            <p className="mn">06</p>
                            <p className="mn">Mobile / Web3</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-7.png" alt="System Architecture for Social Connect App by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Social Connect</h2>
                        <div className="work-item-meta">
                            <p className="mn">07</p>
                            <p className="mn">System Architecture</p>
                        </div>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-item-img">
                        <img src="/images/projects/project-8.png" alt="Graphic Design and Brand Identity by Anmol Malviya" loading="lazy" />
                    </div>
                    <div className="work-item-content">
                        <h2>Brand Identity</h2>
                        <div className="work-item-meta">
                            <p className="mn">08</p>
                            <p className="mn">Graphic Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Shared Footer */}
        <Footer />
      </div>
    </>
  );
}
