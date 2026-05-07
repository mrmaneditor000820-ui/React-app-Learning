import React from 'react';
import About from '../pages/About';
import Mywork from './Mywork';
import Contact from '../pages/Contact';

function Home() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <section style={styles.hero}>

        <div style={styles.blurCircle1}></div>
        <div style={styles.blurCircle2}></div>

        <div style={styles.heroContent}>
          <p style={styles.tag}>🔥 Modern React Portfolio</p>

          <h1 style={styles.heading}>
            Build Amazing <span style={styles.highlight}>Digital Experiences</span>
          </h1>

          <p style={styles.text}>
            Professional portfolio website jahan tum apne projects,
            AI tools aur creative work stylish way me showcase kar sakte ho.
          </p>

          <div style={styles.btnBox}>
            <button style={styles.primaryBtn}>
              Explore Now
            </button>

            <button style={styles.secondaryBtn}>
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
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
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
    color: 'white',
  },

  /* HERO */
  hero: {
    position: 'relative',
    padding: '120px 20px',
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
    padding: '10px 22px',
    borderRadius: '30px',
    marginBottom: '25px',
    color: '#38bdf8',
    fontSize: '15px',
    backdropFilter: 'blur(10px)',
  },

  heading: {
    fontSize: '68px',
    lineHeight: '1.2',
    marginBottom: '25px',
    fontWeight: 'bold',
  },

  highlight: {
    background: 'linear-gradient(to right, #38bdf8, #0ea5e9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  text: {
    fontSize: '20px',
    color: '#cbd5e1',
    lineHeight: '1.8',
    marginBottom: '35px',
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
    padding: '15px 35px',
    borderRadius: '12px',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(14,165,233,0.4)',
    transition: '0.3s',
  },

  secondaryBtn: {
    background: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '15px 35px',
    borderRadius: '12px',
    fontSize: '17px',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
  },

  /* FEATURES */
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    padding: '70px 20px',
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

  /* BLUR EFFECTS */
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
};

export default Home;