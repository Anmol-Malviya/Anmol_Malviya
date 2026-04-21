'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-v2">
      <div className="footer-glass-wrapper">
        {/* Main CTA Section */}
        <div className="footer-cta-section">
          <div className="cta-left">
            <h2 className="cta-title">
              Ready to <span className="gradient-text">Innovate?</span>
            </h2>
            <p className="cta-subtitle mn">Let&apos;s build something that matters.</p>
          </div>
          <div className="cta-right">
            <Link href="/contact" className="cta-button group">
              <span className="btn-text">Start a Project</span>
              <span className="btn-arrow">→</span>
              <div className="btn-glow"></div>
            </Link>
          </div>
        </div>

        {/* Info Grid */}
        <div className="footer-info-grid">
          <div className="grid-col main-branding">
            <h1 className="footer-logo">Anmol <span className="text-accent2">✦</span> Malviya</h1>
            <p className="ss text-white/40 max-w-[300px]">
              Crafting high-performance digital experiences through engineering precision and visual storytelling.
            </p>
            <div className="location-tag group">
              <div className="status-dot"></div>
              <span className="mn text-[10px] tracking-widest uppercase">Based in India — {time}</span>
            </div>
          </div>

          <div className="grid-col links">
            <p className="mn grid-title">// Selection</p>
            <div className="link-list">
              <Link href="/">Home</Link>
              <Link href="/work">Works</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="grid-col socials">
            <p className="mn grid-title">// Connection</p>
            <div className="link-list">
              <a href="https://linkedin.com/in/anmol-malviya27" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/anmol0706" target="_blank" rel="noreferrer">Github</a>
              <a href="https://instagram.com/anmol_20_7_" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://wa.me/917987837169" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="grid-col expertise">
            <p className="mn grid-title">// Expertise</p>
            <div className="expertise-tags">
              <span className="tag-pill">Next.js</span>
              <span className="tag-pill">React</span>
              <span className="tag-pill">GSAP</span>
              <span className="tag-pill">Three.js</span>
              <span className="tag-pill">Node.js</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-v2">
          <div className="bottom-left">
            <p className="mn text-[10px] opacity-30 uppercase tracking-[0.3em]">
              © 2026 // ALL RIGHTS RESERVED
            </p>
          </div>
          <div className="bottom-right">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="back-top-v2 mn group"
            >
              Back to Top <span className="group-hover:-translate-y-1 inline-block transition-transform">↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="footer-background-blur"></div>
    </footer>
  );
}
