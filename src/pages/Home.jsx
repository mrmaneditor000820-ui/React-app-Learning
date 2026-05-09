import React, { useEffect, useRef } from 'react';
import About from '../pages/About';
import Mywork from './Mywork';
import Contact from '../pages/Contact';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <div style={styles.container}>
      {/* PROFESSIONAL DARK PREMIUM BACKGROUND - NO VIDEO */}
      <div style={styles.premiumDarkBg}>
        {/* Animated Gradient Orbs */}
        <div style={styles.glowOrb1}></div>
        <div style={styles.glowOrb2}></div>
        <div style={styles.glowOrb3}></div>
        
        {/* Grid Pattern */}
        <div style={styles.gridPattern}></div>
        
        {/* Subtle Noise Texture */}
        <div style={styles.noiseTexture}></div>
        
        {/* Dark Overlay Gradient */}
        <div style={styles.darkGradientOverlay}></div>
      </div>

      {/* Animated Tech Lines */}
      <div style={styles.techLines}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            style={{
              ...styles.techLine,
              left: `${(i * 6.6)}%`,
              animationDelay: `${i * 0.15}s`,
              height: `${Math.random() * 300 + 80}px`,
              width: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div style={styles.floatingParticles}>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 8}s`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Floating Code Particles */}
      <div style={styles.codeParticles}>
        {['</>', '{ }', '() =>', 'const', '💻', '✨', '⚡', '🚀', '→', '←', '↑', '↓'].map((item, i) => (
          <div 
            key={i} 
            style={{
              ...styles.codeParticle,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${Math.random() * 12 + 10}s`,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.glowingBadge}>
              <span style={styles.liveDot}></span>
              Available for Work
            </div>
            
            <h1 style={styles.heading}>
              Transforming Ideas Into
              <span style={styles.gradientText}> Digital Reality</span>
            </h1>
            
            <p style={styles.subheading}>
              Full Stack Developer | UI/UX Specialist | Creative Technologist
            </p>
            
            <p style={styles.text}>
              I build exceptional web experiences that combine cutting-edge technology with stunning design.
              Let's create something amazing together.
            </p>
            
            <div style={styles.buttonGroup}>
              <button style={styles.primaryButton}>
                View My Work
                <span style={styles.buttonArrow}>→</span>
              </button>
              <button style={styles.secondaryButton}>
                Let's Connect
                <span style={styles.buttonIcon}>💬</span>
              </button>
            </div>

            {/* Stats Row */}
            <div style={styles.statsRow}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Projects</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>35+</span>
                <span style={styles.statLabel}>Happy Clients</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section style={styles.aboutSection}>
          <div style={styles.containerInner}>
            <div style={styles.aboutGrid}>
              {/* Left Column - About Info */}
              <div style={styles.aboutInfo}>
                <div style={styles.sectionTag}>
                  <span style={styles.tagLine}></span>
                  About Me
                </div>
                <h2 style={styles.sectionTitle}>
                  I'm <span style={styles.highlight}>Alex Johnson</span>
                </h2>
                <p style={styles.aboutText}>
                  A passionate developer with over 5 years of experience crafting beautiful 
                  and functional web applications. I specialize in React, Next.js, and modern 
                  JavaScript frameworks.
                </p>
                <p style={styles.aboutText}>
                  My mission is to build digital products that not only look amazing but also 
                  provide seamless user experiences. I believe in clean code, continuous learning,
                  and pushing creative boundaries.
                </p>
                
                {/* Personal Details */}
                <div style={styles.detailsGrid}>
                  <div style={styles.detailItem}>
                    <span style={styles.detailIcon}>📧</span>
                    <div>
                      <span style={styles.detailLabel}>Email</span>
                      <span style={styles.detailValue}>alex.johnson@example.com</span>
                    </div>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailIcon}>📍</span>
                    <div>
                      <span style={styles.detailLabel}>Location</span>
                      <span style={styles.detailValue}>San Francisco, CA</span>
                    </div>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailIcon}>💼</span>
                    <div>
                      <span style={styles.detailLabel}>Availability</span>
                      <span style={styles.detailValue}>Open for Opportunities</span>
                    </div>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailIcon}>🎂</span>
                    <div>
                      <span style={styles.detailLabel}>Age</span>
                      <span style={styles.detailValue}>27 Years</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div style={styles.socialLinks}>
                  <a href="#" style={styles.socialIcon}>🐦 Twitter</a>
                  <a href="#" style={styles.socialIcon}>💼 LinkedIn</a>
                  <a href="#" style={styles.socialIcon}>🐙 GitHub</a>
                  <a href="#" style={styles.socialIcon}>📸 Instagram</a>
                </div>
              </div>

              {/* Right Column - Profile Card */}
              <div style={styles.profileCard}>
                <div style={styles.imageWrapper}>
                  <div style={styles.profileImage}>
                    <span style={styles.avatarEmoji}>👨‍💻</span>
                  </div>
                  <div style={styles.pulseRing}></div>
                </div>
                
                {/* Skills */}
                <div style={styles.skillsContainer}>
                  <p style={styles.skillsTitle}>Tech Stack</p>
                  <div style={styles.skillsGrid}>
                    <span style={styles.skillBadge}>React.js</span>
                    <span style={styles.skillBadge}>Next.js</span>
                    <span style={styles.skillBadge}>Node.js</span>
                    <span style={styles.skillBadge}>TypeScript</span>
                    <span style={styles.skillBadge}>Tailwind</span>
                    <span style={styles.skillBadge}>GraphQL</span>
                  </div>
                </div>

                {/* Quote */}
                <div style={styles.quoteBox}>
                  <span style={styles.quoteMark}>"</span>
                  <p style={styles.quoteText}>Code is poetry written in logic. Design is art that speaks to the soul.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section style={styles.expertise}>
          <div style={styles.containerInner}>
            <div style={styles.expertiseHeader}>
              <span style={styles.expertiseBadge}>My Expertise</span>
              <h2 style={styles.expertiseTitle}>What I <span style={styles.highlight}>Offer</span></h2>
            </div>
            <div style={styles.expertiseGrid}>
              <div style={styles.expertiseCard}>
                <div style={styles.cardIcon}>⚡</div>
                <h3>Fast Performance</h3>
                <p>Optimized applications with 90+ Lighthouse scores for lightning-fast experiences.</p>
              </div>
              <div style={styles.expertiseCard}>
                <div style={styles.cardIcon}>🎨</div>
                <h3>Modern Design</h3>
                <p>Beautiful, pixel-perfect interfaces with attention to every detail.</p>
              </div>
              <div style={styles.expertiseCard}>
                <div style={styles.cardIcon}>📱</div>
                <h3>Responsive</h3>
                <p>Flawless experiences across all devices - mobile, tablet, and desktop.</p>
              </div>
              <div style={styles.expertiseCard}>
                <div style={styles.cardIcon}>🔒</div>
                <h3>Secure Code</h3>
                <p>Enterprise-grade security practices and scalable architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Components */}
        <About />
        <Mywork />
        <Contact />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    fontFamily: "'Inter', 'Poppins', -apple-system, sans-serif",
    overflow: 'hidden',
    color: '#ffffff',
    background: '#0a0a0a',
  },

  // PROFESSIONAL DARK PREMIUM BACKGROUND
  premiumDarkBg: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 20% 30%, #1a1a2e, #0a0a0a)',
  },
  glowOrb1: {
    position: 'absolute',
    top: '10%',
    right: '-20%',
    width: '80%',
    height: '80%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
    animation: 'floatGlow 20s ease-in-out infinite',
  },
  glowOrb2: {
    position: 'absolute',
    bottom: '-30%',
    left: '-20%',
    width: '70%',
    height: '70%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
    animation: 'floatGlow 25s ease-in-out infinite reverse',
  },
  glowOrb3: {
    position: 'absolute',
    top: '40%',
    left: '30%',
    width: '50%',
    height: '50%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
    animation: 'floatGlow 18s ease-in-out infinite',
  },
  gridPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    zIndex: 1,
  },
  noiseTexture: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
    opacity: 0.3,
    pointerEvents: 'none',
    zIndex: 2,
  },
  darkGradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
    zIndex: 3,
  },

  // Tech Lines Animation
  techLines: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 4,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  techLine: {
    position: 'absolute',
    bottom: '-100px',
    background: 'linear-gradient(to top, transparent, rgba(56,189,248,0.2), rgba(139,92,246,0.2), transparent)',
    animation: 'riseUp 8s linear infinite',
  },

  // Floating Particles
  floatingParticles: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 4,
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    backgroundColor: '#38bdf8',
    borderRadius: '50%',
    opacity: 0.4,
    animation: 'floatParticle 12s linear infinite',
  },

  // Code Particles
  codeParticles: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 4,
    pointerEvents: 'none',
  },
  codeParticle: {
    position: 'absolute',
    top: '100%',
    fontSize: '12px',
    opacity: 0.2,
    color: '#38bdf8',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    animation: 'floatUp 15s linear infinite',
  },

  // Main Content
  content: {
    position: 'relative',
    zIndex: 10,
  },

  // Hero Section
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 20px',
  },
  heroContent: {
    maxWidth: '1000px',
    textAlign: 'center',
  },
  glowingBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(56,189,248,0.1)',
    border: '1px solid rgba(56,189,248,0.3)',
    padding: '8px 20px',
    borderRadius: '50px',
    marginBottom: '30px',
    fontSize: '14px',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
  },
  liveDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#38bdf8',
    borderRadius: '50%',
    animation: 'pulse 1.5s infinite',
  },
  heading: {
    fontSize: '72px',
    lineHeight: '1.2',
    marginBottom: '20px',
    fontWeight: '800',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheading: {
    fontSize: '22px',
    color: '#94a3b8',
    marginBottom: '20px',
    fontWeight: '500',
  },
  text: {
    fontSize: '18px',
    color: '#cbd5e1',
    lineHeight: '1.8',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '60px',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    color: 'white',
    border: 'none',
    padding: '14px 35px',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 25px rgba(14,165,233,0.4)',
  },
  secondaryButton: {
    background: 'rgba(255,255,255,0.05)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '14px 35px',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  buttonArrow: {
    transition: 'transform 0.3s ease',
  },
  buttonIcon: {
    fontSize: '18px',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#38bdf8',
  },
  statLabel: {
    fontSize: '13px',
    color: '#64748b',
    marginTop: '5px',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    background: 'rgba(255,255,255,0.1)',
  },

  // About Section
  aboutSection: {
    padding: '100px 20px',
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(15px)',
  },
  containerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'start',
  },
  aboutInfo: {
    padding: '20px',
  },
  sectionTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  tagLine: {
    width: '40px',
    height: '2px',
    background: '#38bdf8',
  },
  sectionTitle: {
    fontSize: '42px',
    marginBottom: '25px',
    fontWeight: '700',
  },
  highlight: {
    color: '#38bdf8',
  },
  aboutText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#cbd5e1',
    marginBottom: '20px',
  },
  detailsGrid: {
    margin: '30px 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  detailIcon: {
    fontSize: '24px',
  },
  detailLabel: {
    fontSize: '11px',
    color: '#64748b',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  detailValue: {
    fontSize: '14px',
    fontWeight: '500',
    display: 'block',
    marginTop: '4px',
  },
  socialLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '30px',
  },
  socialIcon: {
    background: 'rgba(255,255,255,0.05)',
    padding: '8px 18px',
    borderRadius: '40px',
    textDecoration: 'none',
    color: '#e2e8f0',
    fontSize: '13px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  profileCard: {
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(15px)',
    borderRadius: '30px',
    padding: '40px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  imageWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 10px 40px rgba(14,165,233,0.3)',
  },
  avatarEmoji: {
    fontSize: '80px',
  },
  pulseRing: {
    position: 'absolute',
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    border: '2px solid rgba(56,189,248,0.4)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulseRing 2s infinite',
  },
  skillsContainer: {
    margin: '30px 0',
    textAlign: 'left',
  },
  skillsTitle: {
    fontSize: '13px',
    color: '#64748b',
    marginBottom: '15px',
    letterSpacing: '1px',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skillBadge: {
    background: 'rgba(56,189,248,0.1)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    color: '#38bdf8',
    border: '1px solid rgba(56,189,248,0.2)',
  },
  quoteBox: {
    background: 'rgba(56,189,248,0.05)',
    padding: '20px',
    borderRadius: '15px',
    position: 'relative',
    marginTop: '20px',
  },
  quoteMark: {
    fontSize: '40px',
    color: '#38bdf8',
    opacity: 0.3,
    position: 'absolute',
    top: '10px',
    left: '15px',
  },
  quoteText: {
    fontSize: '13px',
    fontStyle: 'italic',
    color: '#94a3b8',
    lineHeight: '1.6',
  },

  // Expertise Section
  expertise: {
    padding: '100px 20px',
  },
  expertiseHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  expertiseBadge: {
    display: 'inline-block',
    background: 'rgba(56,189,248,0.1)',
    padding: '6px 16px',
    borderRadius: '30px',
    fontSize: '13px',
    color: '#38bdf8',
    marginBottom: '15px',
  },
  expertiseTitle: {
    fontSize: '42px',
    fontWeight: '700',
  },
  expertiseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  expertiseCard: {
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '40px 25px',
    textAlign: 'center',
    transition: 'all 0.4s ease',
    h3: {
      fontSize: '22px',
      margin: '20px 0 15px',
      color: '#ffffff',
    },
    p: {
      fontSize: '14px',
      color: '#94a3b8',
      lineHeight: '1.6',
    },
  },
  cardIcon: {
    fontSize: '48px',
  },
};

// Fix nested styles
styles.expertiseCard.h3 = { fontSize: '22px', margin: '20px 0 15px', color: '#ffffff' };
styles.expertiseCard.p = { fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' };

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.5; }
  }
  
  @keyframes pulseRing {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
  }
  
  @keyframes floatGlow {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
    50% { transform: translate(5%, 5%) scale(1.1); opacity: 0.5; }
  }
  
  @keyframes riseUp {
    0% { transform: translateY(100vh); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translateY(-100px); opacity: 0; }
  }
  
  @keyframes floatUp {
    0% { transform: translateY(100vh); opacity: 0; }
    10% { opacity: 0.3; }
    90% { opacity: 0.3; }
    100% { transform: translateY(-100px); opacity: 0; }
  }
  
  @keyframes floatParticle {
    0% { transform: translateY(100vh) translateX(0); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
  }
  
  .primaryButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(14,165,233,0.6);
  }
  
  .primaryButton:hover .buttonArrow {
    transform: translateX(5px);
  }
  
  .secondaryButton:hover {
    background: rgba(56,189,248,0.15);
    border-color: #38bdf8;
  }
  
  .socialIcon:hover {
    background: rgba(56,189,248,0.2);
    transform: translateY(-2px);
  }
  
  .expertiseCard:hover {
    transform: translateY(-5px);
    border-color: rgba(56,189,248,0.3);
    background: rgba(255,255,255,0.06);
  }
  
  @media (max-width: 968px) {
    .aboutGrid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .heading {
      font-size: 48px;
    }
    .sectionTitle, .expertiseTitle {
      font-size: 32px;
    }
    .profileImage {
      width: 160px;
      height: 160px;
    }
    .avatarEmoji {
      font-size: 60px;
    }
    .detailsGrid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .statsRow {
      gap: 20px;
    }
    .statNumber {
      font-size: 24px;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Home;