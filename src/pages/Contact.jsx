import React, { useState } from "react";

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      {/* PREMIUM DARK BACKGROUND */}
      <div style={styles.premiumBg}>
        <div style={styles.glowOrb1}></div>
        <div style={styles.glowOrb2}></div>
        <div style={styles.glowOrb3}></div>
        <div style={styles.gridPattern}></div>
        <div style={styles.darkOverlay}></div>
      </div>

      {/* MAIN CONTAINER */}
      <div style={styles.mainCard}>
        {/* BLUR EFFECTS */}
        <div style={styles.blurTopLeft}></div>
        <div style={styles.blurBottomRight}></div>
        <div style={styles.blurCenter}></div>

        {/* LEFT SIDE */}
        <div style={styles.leftSide}>
          <div style={styles.tagWrapper}>
            <span style={styles.tagIcon}>✨</span>
            <span style={styles.tagText}>Get In Touch</span>
            <span style={styles.tagDot}></span>
          </div>

          <h1 style={styles.heading}>
            Let's Build Something
            <span style={styles.gradientText}>Amazing Together</span>
          </h1>

          <p style={styles.description}>
            Have a project idea or want to work together?
            Send me a message and let's create a modern
            digital experience together.
          </p>

          {/* INFO CARDS */}
          <div style={styles.infoContainer}>
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📧</div>
              <div>
                <h3 style={styles.infoTitle}>Email</h3>
                <p style={styles.infoText}>mrmaneditor000820@email.com</p>
              </div>
              <div style={styles.infoGlow}></div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📱</div>
              <div>
                <h3 style={styles.infoTitle}>Phone</h3>
                <p style={styles.infoText}>+92 3463419974</p>
              </div>
              <div style={styles.infoGlow}></div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📍</div>
              <div>
                <h3 style={styles.infoTitle}>Location</h3>
                <p style={styles.infoText}>Karachi, Pakistan</p>
              </div>
              <div style={styles.infoGlow}></div>
            </div>
          </div>

          {/* Social Links */}
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>🐦 Twitter</a>
            <a href="#" style={styles.socialLink}>💼 LinkedIn</a>
            <a href="#" style={styles.socialLink}>🐙 GitHub</a>
            <a href="#" style={styles.socialLink}>📸 Instagram</a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div style={styles.rightSide}>
          <div style={styles.formHeader}>
            <h2 style={styles.formTitle}>
              Send Message
              <span style={styles.formTitleDot}></span>
            </h2>
            <p style={styles.formSubtext}>
              Fill out the form below and I'll get back to you soon.
            </p>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Your Name
                <span style={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={styles.input}
                className="form-input"
              />
              <div style={styles.inputFocus} className="input-focus"></div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Your Email
                <span style={styles.requiredStar}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={styles.input}
                className="form-input"
              />
              <div style={styles.inputFocus} className="input-focus"></div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Your Message
                <span style={styles.requiredStar}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                style={styles.textarea}
                className="form-input"
              ></textarea>
              <div style={styles.inputFocus} className="input-focus"></div>
            </div>

            <button type="submit" style={styles.submitButton}>
              <span>Send Message</span>
              <span style={styles.buttonArrow}>→</span>
              <div style={styles.buttonShine}></div>
            </button>
          </form>

          {/* Form Decorative Elements */}
          <div style={styles.formDecoration1}></div>
          <div style={styles.formDecoration2}></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div style={styles.floatingParticles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    fontFamily: "'Inter', 'Poppins', -apple-system, sans-serif",
    overflow: "hidden",
    background: "#0a0a0a",
  },

  // PREMIUM DARK BACKGROUND
  premiumBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: "hidden",
    background: "radial-gradient(ellipse at 40% 50%, #0f0f1a, #0a0a0a)",
  },

  glowOrb1: {
    position: "absolute",
    top: "15%",
    right: "-10%",
    width: "55%",
    height: "55%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
    animation: "floatGlow 22s ease-in-out infinite",
  },

  glowOrb2: {
    position: "absolute",
    bottom: "10%",
    left: "-15%",
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
    animation: "floatGlow 26s ease-in-out infinite reverse",
  },

  glowOrb3: {
    position: "absolute",
    top: "50%",
    left: "30%",
    width: "45%",
    height: "45%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
    animation: "floatGlow 19s ease-in-out infinite",
  },

  gridPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      linear-gradient(rgba(56,189,248,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56,189,248,0.02) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    zIndex: 1,
  },

  darkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
    zIndex: 2,
  },

  // MAIN CARD
  mainCard: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    maxWidth: "1200px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderRadius: "40px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.02)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
  },

  // BLUR EFFECTS
  blurTopLeft: {
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "280px",
    height: "280px",
    background: "#38bdf8",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.15,
    zIndex: 0,
  },

  blurBottomRight: {
    position: "absolute",
    bottom: "-100px",
    right: "-100px",
    width: "280px",
    height: "280px",
    background: "#8b5cf6",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.12,
    zIndex: 0,
  },

  blurCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "200px",
    background: "#0ea5e9",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.08,
    zIndex: 0,
  },

  // LEFT SIDE
  leftSide: {
    position: "relative",
    zIndex: 2,
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
  },

  tagWrapper: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    width: "fit-content",
    padding: "8px 20px",
    borderRadius: "50px",
    background: "rgba(56,189,248,0.08)",
    border: "1px solid rgba(56,189,248,0.2)",
    marginBottom: "30px",
  },

  tagIcon: {
    fontSize: "14px",
  },

  tagText: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#38bdf8",
  },

  tagDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#38bdf8",
    animation: "pulse 1.5s infinite",
  },

  heading: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
    color: "#ffffff",
  },

  gradientText: {
    display: "block",
    background: "linear-gradient(135deg, #38bdf8, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  description: {
    color: "#cbd5e1",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "40px",
    maxWidth: "90%",
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "35px",
  },

  infoCard: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 20px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    overflow: "hidden",
    cursor: "pointer",
  },

  infoIcon: {
    fontSize: "28px",
  },

  infoTitle: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#38bdf8",
    marginBottom: "4px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  infoText: {
    fontSize: "14px",
    color: "#e2e8f0",
    fontWeight: "500",
  },

  infoGlow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #38bdf8, #8b5cf6, transparent)",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },

  socialLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "10px",
  },

  socialLink: {
    padding: "8px 18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "30px",
    textDecoration: "none",
    color: "#e2e8f0",
    fontSize: "13px",
    transition: "all 0.3s ease",
  },

  // RIGHT SIDE - FORM
  rightSide: {
    position: "relative",
    zIndex: 2,
    background: "rgba(255,255,255,0.98)",
    padding: "50px",
    borderRadius: "40px 0 0 40px",
  },

  formHeader: {
    marginBottom: "30px",
  },

  formTitle: {
    fontSize: "34px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "10px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },

  formTitleDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #38bdf8, #8b5cf6)",
    display: "inline-block",
  },

  formSubtext: {
    color: "#64748b",
    fontSize: "14px",
    marginTop: "5px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  inputGroup: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#334155",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  requiredStar: {
    color: "#ef4444",
    marginLeft: "4px",
  },

  input: {
    width: "100%",
    padding: "14px 18px",
    fontSize: "15px",
    border: "1.5px solid #e2e8f0",
    borderRadius: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    background: "#ffffff",
    fontFamily: "inherit",
    color: "#1e293b",
  },

  textarea: {
    width: "100%",
    padding: "14px 18px",
    fontSize: "15px",
    border: "1.5px solid #e2e8f0",
    borderRadius: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    background: "#ffffff",
    fontFamily: "inherit",
    resize: "vertical",
    color: "#1e293b",
  },

  inputFocus: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "0%",
    height: "2px",
    background: "linear-gradient(90deg, #38bdf8, #8b5cf6)",
    transition: "width 0.3s ease",
    borderRadius: "2px",
  },

  submitButton: {
    position: "relative",
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "700",
    color: "white",
    background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    border: "none",
    borderRadius: "40px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px",
    transition: "all 0.3s ease",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(14,165,233,0.3)",
  },

  buttonArrow: {
    transition: "transform 0.3s ease",
  },

  buttonShine: {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    transition: "left 0.5s ease",
  },

  formDecoration1: {
    position: "absolute",
    bottom: "30px",
    right: "30px",
    fontSize: "60px",
    opacity: 0.03,
    pointerEvents: "none",
    fontFamily: "monospace",
    content: "'</>'",
  },

  formDecoration2: {
    position: "absolute",
    top: "30px",
    left: "30px",
    fontSize: "40px",
    opacity: 0.03,
    pointerEvents: "none",
    fontFamily: "monospace",
    content: "'{}'",
  },

  // Floating Particles
  floatingParticles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 5,
    pointerEvents: "none",
  },

  particle: {
    position: "absolute",
    bottom: "-10px",
    width: "2px",
    height: "2px",
    background: "#38bdf8",
    borderRadius: "50%",
    opacity: 0.3,
    animation: "floatParticle 10s linear infinite",
  },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes floatGlow {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(3%, 3%) scale(1.05); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.5; }
  }

  @keyframes floatParticle {
    0% { transform: translateY(100vh) translateX(0); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
  }

  .infoCard:hover {
    transform: translateX(5px);
    border-color: rgba(56,189,248,0.2);
    background: rgba(255,255,255,0.05);
  }

  .infoCard:hover .infoGlow {
    transform: scaleX(1);
  }

  .socialLink:hover {
    background: rgba(56,189,248,0.15);
    border-color: #38bdf8;
    transform: translateY(-2px);
  }

  .form-input:focus {
    border-color: #38bdf8 !important;
    box-shadow: 0 0 0 3px rgba(56,189,248,0.1) !important;
  }

  .form-input:focus ~ .input-focus {
    width: 80% !important;
  }

  .submitButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(14,165,233,0.5);
  }

  .submitButton:hover .buttonArrow {
    transform: translateX(5px);
  }

  .submitButton:hover .buttonShine {
    left: 100%;
  }

  @media (max-width: 968px) {
    .mainCard {
      grid-template-columns: 1fr;
    }
    .rightSide {
      border-radius: 30px 30px 30px 30px;
    }
    .leftSide {
      padding: 40px;
    }
    .heading {
      font-size: 36px;
    }
    .formTitle {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    .leftSide, .rightSide {
      padding: 30px;
    }
    .infoCard {
      padding: 12px 16px;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Contact;