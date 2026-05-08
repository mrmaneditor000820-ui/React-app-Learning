import React from 'react';
import About from '../pages/About';
import Mywork from './Mywork';
import Contact from '../pages/Contact';

function Home() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION with gradient background */}
      <section style={styles.hero}>
        <div style={styles.blurCircle1}></div>
        <div style={styles.blurCircle2}></div>
        <div style={styles.blurCircle3}></div>

        <div style={styles.heroContent}>
          <p style={styles.tag}>✨ Modern React Portfolio</p>

          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.highlight}>Alex Johnson</span>
          </h1>

          <p style={styles.subheading}>
            Frontend Developer & UI Specialist
          </p>

          <p style={styles.text}>
            I craft stunning digital experiences with React, modern design, and a touch of creativity.
          </p>

          <div style={styles.btnBox}>
            <button style={styles.primaryBtn}>
              Hire Me
            </button>
            <button style={styles.secondaryBtn}>
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* PROFILE SECTION - About me with image */}
      <section style={styles.profileSection}>
        <div style={styles.profileInner}>
          {/* Left side: Info */}
          <div style={styles.profileInfo}>
            <div style={styles.sectionBadge}>Get to know me</div>
            <h2 style={styles.sectionTitle}>
              About <span style={styles.highlight}>Myself</span>
            </h2>
            <p style={styles.profileText}>
              I'm a passionate frontend developer with 4+ years of experience building modern web applications.
              I specialize in React, Tailwind CSS, and creating seamless user experiences.
            </p>
            <p style={styles.profileText}>
              My journey started with coding small websites and now I work with top startups to build scalable,
              beautiful interfaces. I believe in clean code, performance, and pixel-perfect designs.
            </p>

            {/* Info Grid */}
            <div style={styles.infoGrid}>
              <div><span style={styles.infoLabel}>Name:</span> Alex Johnson</div>
              <div><span style={styles.infoLabel}>Email:</span> alex@example.com</div>
              <div><span style={styles.infoLabel}>Location:</span> San Francisco, CA</div>
              <div><span style={styles.infoLabel}>Freelance:</span> Available</div>
            </div>

            {/* Social Links */}
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialIcon}>🐦 Twitter</a>
              <a href="#" style={styles.socialIcon}>💼 LinkedIn</a>
              <a href="#" style={styles.socialIcon}>📸 Instagram</a>
              <a href="#" style={styles.socialIcon}>🐙 GitHub</a>
            </div>
          </div>

          {/* Right side: Image Card */}
          <div style={styles.profileImageCard}>
            <div style={styles.imageWrapper}>
              {/* Placeholder for your professional photo */}
              <div style={styles.profileImage}>
                <span style={styles.imageEmoji}>👨‍💻</span>
              </div>
            </div>
            {/* Stats */}
            <div style={styles.statsContainer}>
              <div style={styles.statItem}>
                <h3>50+</h3>
                <p>Projects</p>
              </div>
              <div style={styles.statItem}>
                <h3>30+</h3>
                <p>Clients</p>
              </div>
              <div style={styles.statItem}>
                <h3>4+</h3>
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (preserved) */}
      <section style={styles.features}>
        <div style={styles.card}>
          <div style={styles.icon}>⚡</div>
          <h3 style={styles.cardTitle}>Fast Performance</h3>
          <p style={styles.cardText}>
            Optimized React website with smooth experience.
          </p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>🎨</div>
          <h3 style={styles.cardTitle}>Premium UI</h3>
          <p style={styles.cardText}>
            Clean modern design with glassmorphism effects.
          </p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>📱</div>
          <h3 style={styles.cardTitle}>Responsive</h3>
          <p style={styles.cardText}>
            Perfectly works on mobile, tablet and desktop.
          </p>
        </div>
      </section>

      {/* Other sections remain */}
      <About />
      <Mywork />
      <Contact />
    </div>
  );
}

const styles = {
  container: {
    background: '#020617',
    minHeight: '100vh',
    fontFamily: 'Inter, Arial, sans-serif',
    overflow: 'hidden',
    color: 'white',
  },
  /* HERO */
  hero: {
    position: 'relative',
    padding: '100px 20px 80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '850px',
    zIndex: '2',
  },
  tag: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '8px 20px',
    borderRadius: '30px',
    marginBottom: '25px',
    color: '#38bdf8',
    fontSize: '14px',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    fontSize: '68px',
    lineHeight: '1.2',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '24px',
    color: '#94a3b8',
    marginBottom: '20px',
    letterSpacing: '0.5px',
  },
  highlight: {
    background: 'linear-gradient(to right, #38bdf8, #0ea5e9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  text: {
    fontSize: '18px',
    color: '#cbd5e1',
    lineHeight: '1.7',
    marginBottom: '35px',
    maxWidth: '600px',
    margin: '0 auto 35px',
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    background: 'linear-gradient(to right, #0ea5e9, #38bdf8)',
    color: 'white',
    border: 'none',
    padding: '14px 34px',
    borderRadius: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(14,165,233,0.4)',
    transition: '0.3s',
  },
  secondaryBtn: {
    background: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '14px 34px',
    borderRadius: '40px',
    fontSize: '16px',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
  },
  /* PROFILE SECTION */
  profileSection: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  profileInner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flex: '1',
    minWidth: '280px',
  },
  sectionBadge: {
    display: 'inline-block',
    background: 'rgba(56,189,248,0.15)',
    padding: '6px 16px',
    borderRadius: '30px',
    fontSize: '14px',
    color: '#38bdf8',
    marginBottom: '20px',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: '42px',
    marginBottom: '25px',
    fontWeight: 'bold',
  },
  profileText: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#cbd5e1',
    marginBottom: '20px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    margin: '30px 0',
    fontSize: '15px',
    color: '#e2e8f0',
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#38bdf8',
    marginRight: '8px',
  },
  socialLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '15px',
  },
  socialIcon: {
    background: 'rgba(255,255,255,0.05)',
    padding: '8px 18px',
    borderRadius: '40px',
    textDecoration: 'none',
    color: '#e2e8f0',
    fontSize: '14px',
    transition: '0.3s',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  profileImageCard: {
    flex: '1',
    minWidth: '280px',
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(14px)',
    borderRadius: '30px',
    padding: '30px',
    border: '1px solid rgba(255,255,255,0.08)',
    textAlign: 'center',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '25px',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 35px rgba(14,165,233,0.3)',
  },
  imageEmoji: {
    fontSize: '80px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  statItem: {
    textAlign: 'center',
  },
  /* FEATURES */
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    padding: '70px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    width: '300px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(14px)',
    borderRadius: '22px',
    padding: '35px 25px',
    transition: '0.3s',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#38bdf8',
  },
  cardText: {
    color: '#cbd5e1',
    lineHeight: '1.7',
    fontSize: '16px',
  },
  /* BLUR CIRCLES */
  blurCircle1: {
    position: 'absolute',
    width: '350px',
    height: '350px',
    background: '#0ea5e9',
    borderRadius: '50%',
    filter: 'blur(120px)',
    top: '-100px',
    left: '-100px',
    opacity: '0.4',
  },
  blurCircle2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: '#38bdf8',
    borderRadius: '50%',
    filter: 'blur(120px)',
    bottom: '-100px',
    right: '-100px',
    opacity: '0.4',
  },
  blurCircle3: {
    position: 'absolute',
    width: '250px',
    height: '250px',
    background: '#0ea5e9',
    borderRadius: '50%',
    filter: 'blur(100px)',
    top: '40%',
    left: '70%',
    opacity: '0.2',
  },
};

export default Home;