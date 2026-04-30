'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Cpu, Briefcase, Award, Trophy, Medal, Database, Sparkles, Zap, ArrowLeft, ArrowRight } from 'lucide-react';

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
        <h1 className="sr-only">About Anmol Malviya - Senior Full Stack + AI Developer</h1>

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
              <p className="mn">// Senior Full Stack + AI Developer</p>
              
              <div className="bio-content">
                <p className="ss lead">
                  I&apos;m <strong>Anmol Malviya</strong>, a Full Stack + AI Developer focused on building scalable web applications, mobile apps, and modern digital experiences.
                </p>
                
                <p className="ss">
                  Currently, I work as a <span className="highlight">Senior Developer at Adhritverse</span> and contribute as an Intern at <span className="highlight">VyorAI</span>, where I gain real-world experience in development and AI-driven systems.
                </p>

                <p className="ss">
                  I specialize in the <strong>MERN stack, Next.js, mobile app development</strong>, and integrating AI into real-world applications to build intelligent, high-performance solutions.
                </p>

                <p className="ss">
                  Based in <strong>Madhya Pradesh, India</strong>, I am currently pursuing my B.Tech at PIEMR Indore, continuing my mission to create products that leave a lasting impact.
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
            <p className="mn">AI / ML</p>
          </div>
        </section>

        <section className="timeline-section">
          <div className="cert-header">
            <p className="mn">// Professional Journey</p>
            <h2 className="header-split">
              <span>Work</span>
              <span className="outline-text">Experience</span>
            </h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-card">
              <span className="timeline-date mn">PRESENT</span>
              <h3>Senior Developer</h3>
              <span className="company">Adhritverse</span>
              <ul className="ss">
                <li>Developing scalable web applications</li>
                <li>Building modern UI systems using React & Tailwind</li>
                <li>Optimizing performance and frontend architecture</li>
              </ul>
            </div>

            <div className="timeline-card">
              <span className="timeline-date mn">2024 - PRESENT</span>
              <h3>Developer Intern</h3>
              <span className="company">VyorAI</span>
              <ul className="ss">
                <li>Working on AI-driven workflows and automation</li>
                <li>Contributing to startup-level product development</li>
                <li>Rapid prototyping and experimentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="timeline-section" style={{ paddingTop: 0 }}>
          <div className="cert-header">
            <p className="mn">// Academic Foundation</p>
            <h2 className="header-split">
              <span>Educational</span>
              <span className="outline-text">Background</span>
            </h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-card">
              <span className="timeline-date mn">PURSUING (2023-2027)</span>
              <h3>B.Tech in Computer Science</h3>
              <span className="company">PIEMR Indore · 4th Sem</span>
              <ul className="ss">
                <li>Specializing in AI & Full Stack Development</li>
                <li>Active member of technical and AI clubs</li>
              </ul>
            </div>

            <div className="timeline-card">
              <span className="timeline-date mn">GRADUATED 2023</span>
              <h3>Diploma in CS Engineering</h3>
              <span className="company">Govt. Polytechnic College, Itarsi</span>
              <ul className="ss">
                <li>Foundational engineering principles</li>
                <li>Core computer science subjects and practical labs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section className="about-internships certifications">
          <div className="cert-header">
            <p className="mn">// Practical Training</p>
            <h2 className="header-split">
              <span>Internships</span>
              <span className="outline-text">& Roles</span>
            </h2>
          </div>

          <div className="internship-grid">
            <div className="intern-card">
              <div className="intern-icon">
                <Database size={32} strokeWidth={1.5} />
              </div>
              <div className="intern-content">
                <div className="intern-main">
                  <h3>Data Science Intern</h3>
                  <p className="mn">EventDhara · 3 Months</p>
                </div>
                <ul className="ss">
                  <li>Worked on advanced data science projects and data analysis</li>
                  <li>Implemented predictive models and data visualization workflows</li>
                </ul>
                <div className="intern-footer">
                  <span className="mn date">Feb 2026 - Present</span>
                  <a href="/certifications/eventdhara-offer-letter.pdf" target="_blank" rel="noopener noreferrer" className="mn view-link">View Offer ↗</a>
                </div>
              </div>
            </div>

            <div className="intern-card">
              <div className="intern-icon">
                <Sparkles size={32} strokeWidth={1.5} />
              </div>
              <div className="intern-content">
                <div className="intern-main">
                  <h3>AI Trainee Intern</h3>
                  <p className="mn">NexisparkX Technologies · 2 Months</p>
                </div>
                <ul className="ss">
                  <li>Developed and optimized Machine Learning models</li>
                  <li>Handled data preprocessing, cleaning, and model debugging</li>
                </ul>
                <div className="intern-footer">
                  <span className="mn date">Mar 2026 - May 2026</span>
                  <a href="/certifications/nexisparkx-internship-cert.pdf" target="_blank" rel="noopener noreferrer" className="mn view-link">View Cert ↗</a>
                </div>
              </div>
            </div>

            <div className="intern-card">
              <div className="intern-icon">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <div className="intern-content">
                <div className="intern-main">
                  <h3>Field Tech Executive</h3>
                  <p className="mn">Kamarta Robotics · 2025</p>
                </div>
                <ul className="ss">
                  <li>Specialized in networking and hardware troubleshooting</li>
                  <li>Managed system maintenance and technical infrastructure</li>
                </ul>
                <div className="intern-footer">
                  <span className="mn date">Aug 2025 - 2026</span>
                  <a href="/certifications/kamarta-internship-cert.pdf" target="_blank" rel="noopener noreferrer" className="mn view-link">View Cert ↗</a>
                </div>
              </div>
            </div>
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
              <h2>Senior</h2>
              <p className="mn">Full Stack + AI Developer</p>
            </div>
            <div className="stats-item-2 stats-col">
              <h2>10+</h2>
              <p className="mn">Projects Delivered</p>
            </div>
          </div>
        </section>

        <section className="hackathon-section">
          <div className="cert-header">
            <p className="mn">// Recognition</p>
            <h2 className="header-split">
              <span>Hackathons</span>
              <span className="outline-text">& Awards</span>
            </h2>
          </div>

          <div className="awards-leaderboard">
            <a href="/certifications/cyberthinker-competition-cert.pdf" target="_blank" rel="noopener noreferrer" className="award-row" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="award-rank">1ST</div>
              <div className="award-details">
                <h3>CyberThinker Competition</h3>
                <p className="ss">Organized by GeeksforGeeks Student Chapter PIEMR in collaboration with Safeclicks.</p>
              </div>
              <div className="award-meta">
                <span className="mn cert-view" style={{ fontSize: '0.65rem' }}>Top Scorer ↗</span>
                <div className="award-icon-wrapper">
                  <Medal size={24} strokeWidth={1.5} />
                </div>
              </div>
            </a>

            <a href="/certifications/techsprint-hackathon-cert.pdf" target="_blank" rel="noopener noreferrer" className="award-row" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="award-rank">2ND</div>
              <div className="award-details">
                <h3>TechSprint Hackathon</h3>
                <p className="ss">First Runner-Up. Organized by Google Developer Groups on Campus (GDGoC), PIEMR.</p>
              </div>
              <div className="award-meta">
                <span className="mn cert-view" style={{ fontSize: '0.65rem' }}>View Details ↗</span>
                <div className="award-icon-wrapper">
                  <Trophy size={24} strokeWidth={1.5} />
                </div>
              </div>
            </a>

            <a href="/certifications/codestorm-hackathon-cert.pdf" target="_blank" rel="noopener noreferrer" className="award-row" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="award-rank">PART.</div>
              <div className="award-details">
                <h3>CODESTORM Hackathon</h3>
                <p className="ss">PIEMR AI Club. Demonstrated excellence in innovation, collaboration, and problem-solving.</p>
              </div>
              <div className="award-meta">
                <span className="mn cert-view" style={{ fontSize: '0.65rem' }}>View Details ↗</span>
                <div className="award-icon-wrapper">
                  <Cpu size={24} strokeWidth={1.5} />
                </div>
              </div>
            </a>

            <a href="/certifications/kriyeta-participation.pdf" target="_blank" rel="noopener noreferrer" className="award-row" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="award-rank">PART.</div>
              <div className="award-details">
                <h3>KRIYETA 5.0 Hackathon</h3>
                <p className="ss">Participated in a 36-hour long hackathon. Demonstrated exceptional technical expertise and innovation.</p>
              </div>
              <div className="award-meta">
                <span className="mn cert-view" style={{ fontSize: '0.65rem' }}>Certificate ↗</span>
                <div className="award-icon-wrapper">
                  <Cpu size={24} strokeWidth={1.5} />
                </div>
              </div>
            </a>

            <a href="/certifications/symbiosis-hackathon.pdf" target="_blank" rel="noopener noreferrer" className="award-row" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="award-rank">PART.</div>
              <div className="award-details">
                <h3>Symbiosis Skill Hackathon</h3>
                <p className="ss">Active participation in a 36-hour national-level hackathon organized by SUAS, Indore.</p>
              </div>
              <div className="award-meta">
                <span className="mn cert-view" style={{ fontSize: '0.65rem' }}>Certificate ↗</span>
                <div className="award-icon-wrapper">
                  <Medal size={24} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications-premium">
          <div className="cert-header">
            <div className="cert-header-main">
              <p className="mn">// Validation & Expertise</p>
              <h2 className="header-split">
                <span>Certifications</span>
                <span className="outline-text">& Credentials</span>
              </h2>
            </div>
          </div>

          <div className="cert-slider-container">
            <div className="cert-track">
              <div className="cert-card featured">
                <div className="cert-noise"></div>
                <div className="cert-badge">
                  <Shield size={24} strokeWidth={1.5} />
                </div>
                <div className="cert-card-content">
                  <p className="mn card-tag">MPSSDEGB & IIT Jodhpur</p>
                  <h3>Cyber Security <br/> Excellence Program</h3>
                  <p className="ss">Comprehensive program by IIT Jodhpur Technology Innovation & Start-up Centre (TISC).</p>
                </div>
                <div className="cert-card-footer">
                  <div className="cert-date mn">Class of 2025</div>
                  <a href="/certifications/cyber-security-excellence-cert.pdf" target="_blank" rel="noopener noreferrer" className="cert-view mn" style={{ textDecoration: 'none' }}>View Certificate ↗</a>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-noise"></div>
                <div className="cert-badge">
                  <Cpu size={24} strokeWidth={1.5} />
                </div>
                <div className="cert-card-content">
                  <p className="mn card-tag">Workshop</p>
                  <h3>Prompt <br/> Engineering</h3>
                  <p className="ss">Neurons School of Innovation & AI. Explored cutting-edge advancements.</p>
                </div>
                <div className="cert-card-footer">
                  <div className="cert-date mn">Workshop</div>
                  <a href="/certifications/prompt-engineering-cert.pdf" target="_blank" rel="noopener noreferrer" className="cert-view mn" style={{ textDecoration: 'none' }}>Verify ↗</a>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-noise"></div>
                <div className="cert-badge">
                  <Briefcase size={24} strokeWidth={1.5} />
                </div>
                <div className="cert-card-content">
                  <p className="mn card-tag">HostKash</p>
                  <h3>Summer <br/> Internship</h3>
                  <p className="ss">Successfully completed a 4-week internship program.</p>
                </div>
                <div className="cert-card-footer">
                  <div className="cert-date mn">Internship</div>
                  <a href="/certifications/hostkash-internship-cert.pdf" target="_blank" rel="noopener noreferrer" className="cert-view mn" style={{ textDecoration: 'none' }}>Verify ↗</a>
                </div>
              </div>

              <div className="cert-card featured">
                <div className="cert-noise"></div>
                <div className="cert-badge">
                  <Award size={24} strokeWidth={1.5} />
                </div>
                <div className="cert-card-content">
                  <p className="mn card-tag">UNNATI Foundation</p>
                  <h3>UNXT Soft Skill Program</h3>
                  <p className="ss">165 hours of training in Spoken English, Employability, and Life Skills.</p>
                </div>
                <div className="cert-card-footer">
                  <div className="cert-date mn">Certified 2024</div>
                  <a href="/certifications/unxt-soft-skill-program.pdf" target="_blank" rel="noopener noreferrer" className="cert-view mn" style={{ textDecoration: 'none' }}>View ↗</a>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-noise"></div>
                <div className="cert-badge">
                  <Trophy size={24} strokeWidth={1.5} />
                </div>
                <div className="cert-card-content">
                  <p className="mn card-tag">Assessment</p>
                  <h3>Self Growth <br/> Report</h3>
                  <p className="ss">Comprehensive analysis of professional and personal development milestones.</p>
                </div>
                <div className="cert-card-footer">
                  <div className="cert-date mn">Assessment</div>
                  <a href="/certifications/self-growth-report.pdf" target="_blank" rel="noopener noreferrer" className="cert-view mn" style={{ textDecoration: 'none' }}>View ↗</a>
                </div>
              </div>

              <div className="cert-card featured">
                <div className="cert-noise"></div>
                <div className="cert-badge">
                  <Cpu size={24} strokeWidth={1.5} />
                </div>
                <div className="cert-card-content">
                  <p className="mn card-tag">Hackathon</p>
                  <h3>KRIYETA 5.0 <br/> Participation</h3>
                  <p className="ss">Demonstrated excellence in innovation at a 36-hour long hackathon.</p>
                </div>
                <div className="cert-card-footer">
                  <div className="cert-date mn">Jan 2025</div>
                  <a href="/certifications/kriyeta-participation.pdf" target="_blank" rel="noopener noreferrer" className="cert-view mn" style={{ textDecoration: 'none' }}>View ↗</a>
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
