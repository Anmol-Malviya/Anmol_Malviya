'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const loadAnimations = async () => {
      if (typeof window === 'undefined') return;
      const transition = await import('@/components/animations/transition');
      const menu = await import('@/components/animations/menu');
      const contact = await import('@/components/animations/contact');

      [transition, menu, contact].forEach((module) => {
        if (module?.default) module.default();
      });
    };
    loadAnimations();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Using FormSubmit.co as a free, no-backend form handler.
      // Replace 'anmolcloud7@gmail.com' with your actual email if needed.
      const res = await fetch('https://formsubmit.co/ajax/anmolmalviya4328@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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

      <div className="page contact-page">
        <h1 className="sr-only">Contact Anmol Malviya</h1>

        <section className="contact trail-container">
          <div className="contact-card-dark">
            <div className="contact-left-impressive">
              <div className="impressive-text">
                <h2>Let&apos;s create</h2>
                <p className="glitch-text contact-glitch-word" data-text="Something">Something</p>
                <p className="gradient-text contact-gradient-word">Extraordinary.</p>
              </div>
              <div className="impressive-subtext">
                <p>Ready to push boundaries? Drop me a line below and I&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="contact-direct">
                <div className="direct-item">
                  <span className="direct-label">Email</span>
                  <a href="mailto:anmolmalviya4328@gmail.com">anmolmalviya4328@gmail.com</a>
                </div>
                <div className="direct-item">
                  <span className="direct-label">Location</span>
                  <span>Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="contact-right-form">
              <p className="form-title mn">Send a Message</p>

              <form className="contact-form-ui" id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#a0a5b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <input type="text" id="firstName" name="firstName" placeholder="Your Name" required />
                </div>

                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#a0a5b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>

                <div className="input-wrapper text-wrapper">
                  <textarea id="message" name="message" placeholder="Your message..." required></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'sending'}
                >
                  <span>
                    {status === 'sending' ? 'Sending...' : 'Send Message ➔'}
                  </span>
                </button>

                {status === 'success' && (
                  <p className="form-status-msg form-success mn">
                    Thanks! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="form-status-msg form-error mn">
                    Something went wrong. Try emailing me directly.
                  </p>
                )}
              </form>

              <div className="or-separator">Or</div>

              <div className="social-circles">
                <a href="https://www.linkedin.com/in/anmol-malviya27/" target="_blank" rel="noreferrer" className="social-circle linkedin" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a href="https://www.instagram.com/anmol_20_7_?igsh=MWhyOXdnNGJqcGQwNg==" target="_blank" rel="noreferrer" className="social-circle instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
                <a href="https://wa.me/917987837169" target="_blank" rel="noreferrer" className="social-circle whatsapp" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
