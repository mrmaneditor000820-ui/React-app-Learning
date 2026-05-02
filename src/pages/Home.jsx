import React from 'react';
import About from '../pages/About'
import Mywork from './Mywork';
import Contact from '../pages/Contact'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heading}>Welcome to My Website </h1>
        <p style={styles.text}>
          Yahan tum apne projects, AI tools aur ideas showcase kar sakte ho.
        </p>
        <button style={styles.button}>Get Started</button>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Fast </h3>
          <p>React based fast performance website</p>
        </div>

        <div style={styles.card}>
          <h3>Responsive </h3>
          <p>Mobile aur desktop dono pe perfect</p>
        </div>

        <div style={styles.card}>
          <h3>Modern </h3>
          <p>Clean aur modern UI design</p>
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
    fontFamily: "Arial",
    textAlign: "center",
  },
  hero: {
    background: "#0f172a",
    color: "white",
    padding: "80px 20px",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#22c55e",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
  },
  card: {
    background: "#f1f5f9",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
  },
};

export default Home;