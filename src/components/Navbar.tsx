'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / windowHeight) * 100;
      setScrollProgress(progress);

      // Hide/Show logic
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <nav className={`z-[9999] transition-all duration-500 ease-soft-expo ${isVisible ? 'translate-y-0' : '-translate-y-full opacity-0'}`}>
        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-accent2 shadow-[0_0_10px_var(--accent2)] opacity-70 transition-all duration-100 ease-out z-[101]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="logo cursor-pointer group">
          <div className="logo-container">
            <p className="mn text-white transition-all duration-300 group-hover:scale-105 group-hover:text-accent1">
              <Link href="/">A <span className="text-accent2">✦</span> M</Link>
            </p>
          </div>
        </div>

        <div className="nav-center-info hide-mobile group flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="status-dot"></div>
            <p className="mn text-[9px] text-white/40 tracking-[0.15em] uppercase group-hover:text-white/80 transition-colors">Available now</p>
          </div>
          <p className="clock-text font-mono text-[11px] text-accent2 tracking-widest opacity-90">{time}</p>
        </div>

        <div className="menu-toggle-btn group hover:bg-white/5 active:scale-95 transition-all text-white" role="button" aria-label="Toggle Menu">
          <div className="menu-toggle-btn-wrapper">
            <p className="mn open-label text-[11px] uppercase tracking-wider">Menu</p>
            <p className="mn close-label text-[11px] uppercase tracking-wider">Close</p>
          </div>
        </div>
      </nav>


      <div className="nav-overlay">
        <div className="nav-items group/list">
          <div className={`nav-item group/item ${pathname === '/' ? 'active' : ''}`}>
            <span className="nav-item-num mn">01</span>
            <p><Link href="/">Home</Link></p>
          </div>
          <div className={`nav-item group/item ${pathname === '/about' ? 'active' : ''}`}>
            <span className="nav-item-num mn">02</span>
            <p><Link href="/about">About</Link></p>
          </div>
          <div className={`nav-item group/item ${pathname === '/work' ? 'active' : ''}`}>
            <span className="nav-item-num mn">03</span>
            <p><Link href="/work">Work</Link></p>
          </div>
          <div className={`nav-item group/item ${pathname === '/contact' ? 'active' : ''}`}>
            <span className="nav-item-num mn">04</span>
            <p><Link href="/contact">Contact</Link></p>
          </div>
        </div>
        <div className="nav-footer">
          <div className="nav-footer-item">
            <div className="nav-footer-item-header">
              <p className="mn">Find Me</p>
            </div>
            <div className="nav-footer-item-copy">
              <p className="mn"><a href="https://github.com/Anmol-Malviya" target="_blank" rel="noreferrer">Github</a></p>
              <p className="mn"><a href="https://www.linkedin.com/in/anmol-malviya27/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </div>
          </div>
          <div className="nav-footer-item">
            <div className="nav-footer-item-copy">
              <p className="mn"></p>
            </div>
          </div>
          <div className="nav-footer-item">
            <div className="nav-footer-item-header">
              <p className="mn">Get in Touch</p>
            </div>
            <div className="nav-footer-item-copy">
              <p className="mn">
                <a href="mailto:anmolcloud7@gmail.com" target="_blank" rel="noreferrer">anmolcloud7@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
