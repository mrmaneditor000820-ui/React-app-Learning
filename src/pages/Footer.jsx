import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      background: "#0f172a",
      color: "#fff",
      padding: "40px 20px 10px",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "auto",
    },
    section: {},
    logo: {
      color: "#38bdf8",
    },
    text: {
      fontSize: "14px",
      color: "#cbd5f5",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      margin: "8px 0",
    },
    link: {
      color: "#cbd5f5",
      textDecoration: "none",
    },
    socials: {
      display: "flex",
      gap: "10px",
    },
    bottom: {
      textAlign: "center",
      borderTop: "1px solid #1e293b",
      marginTop: "30px",
      paddingTop: "10px",
      fontSize: "14px",
      color: "#94a3b8",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Logo */}
        <div style={styles.section}>
          <h2 style={styles.logo}>AI With Rehman</h2>
          <p style={styles.text}>
            Learn AI, coding, and tech with simple tutorials.
          </p>
        </div>

        {/* Links */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="/" style={styles.link}>Home</a></li>
            <li style={styles.listItem}><a href="/" style={styles.link}>About</a></li>
            <li style={styles.listItem}><a href="/" style={styles.link}>Services</a></li>
            <li style={styles.listItem}><a href="/" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socials}>
            <a href="/" style={styles.link}>Facebook</a>
            <a href="/" style={styles.link}>YouTube</a>
            <a href="/" style={styles.link}>LinkedIn</a>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        <p>© 2026 AI With Rehman | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;