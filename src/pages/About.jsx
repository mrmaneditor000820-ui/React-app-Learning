import React from 'react';

function About() {
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

            {/* HEADER */}
            <section style={styles.header}>
                <div style={styles.blur1}></div>
                <div style={styles.blur2}></div>

                <div style={styles.headerContent}>
                    <p style={styles.tag}>
                        <span style={styles.tagIcon}>✨</span> About Our Platform
                    </p>

                    <h1 style={styles.heading}>
                        We Create <span style={styles.highlight}>Modern Digital Solutions</span>
                    </h1>

                    <p style={styles.subText}>
                        Professional web development aur AI based experiences
                        jo modern UI aur smooth performance provide karte hain.
                    </p>
                </div>

                {/* Floating Elements */}
                <div style={styles.floatingElements}>
                    <div style={styles.floatItem1}>{'</>'}</div>
                    <div style={styles.floatItem2}>{'{}'}</div>
                    <div style={styles.floatItem3}>{'()=>'}</div>
                </div>
            </section>

            {/* CONTENT */}
            <section style={styles.content}>
                <div style={styles.card}>
                    <div style={styles.cardGlow}></div>
                    <div style={styles.icon}>🚀</div>
                    <h2 style={styles.cardTitle}>Who We Are</h2>
                    <p style={styles.cardText}>
                        We are building a modern web development and AI tools based platform
                        where users can showcase their projects and creative ideas professionally.
                    </p>
                    <div style={styles.cardBorder}></div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardGlow}></div>
                    <div style={styles.icon}>🎯</div>
                    <h2 style={styles.cardTitle}>Our Mission</h2>
                    <p style={styles.cardText}>
                        Our mission is to create simple, fast and powerful web applications
                        that provide users with a smooth and useful experience.
                    </p>
                    <div style={styles.cardBorder}></div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardGlow}></div>
                    <div style={styles.icon}>💎</div>
                    <h2 style={styles.cardTitle}>Why Choose Us</h2>
                    <p style={styles.cardText}>
                        Premium UI design, fast performance and modern technologies
                        combined to deliver a professional digital experience.
                    </p>
                    <div style={styles.cardBorder}></div>
                </div>
            </section>

        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        background: '#0a0a0a',
        color: 'white',
        padding: '80px 20px',
        fontFamily: "'Inter', 'Poppins', -apple-system, sans-serif",
        overflow: 'hidden',
    },

    // PREMIUM DARK BACKGROUND
    premiumBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 40%, #0f0f1a, #0a0a0a)',
    },

    glowOrb1: {
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '60%',
        height: '60%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
        animation: 'floatGlow 18s ease-in-out infinite',
    },

    glowOrb2: {
        position: 'absolute',
        bottom: '0%',
        right: '-15%',
        width: '50%',
        height: '50%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
        animation: 'floatGlow 22s ease-in-out infinite reverse',
    },

    glowOrb3: {
        position: 'absolute',
        top: '50%',
        left: '30%',
        width: '40%',
        height: '40%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        animation: 'floatGlow 15s ease-in-out infinite',
    },

    gridPattern: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
            linear-gradient(rgba(56,189,248,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 1,
    },

    darkOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
        zIndex: 2,
    },

    /* HEADER */
    header: {
        position: 'relative',
        zIndex: 10,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '40px',
        padding: '90px 30px',
        textAlign: 'center',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        maxWidth: '1200px',
        margin: '0 auto',
    },

    headerContent: {
        position: 'relative',
        zIndex: 4,
        maxWidth: '850px',
        margin: 'auto',
    },

    tag: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(56,189,248,0.08)',
        border: '1px solid rgba(56,189,248,0.2)',
        padding: '10px 24px',
        borderRadius: '50px',
        color: '#38bdf8',
        marginBottom: '30px',
        fontSize: '14px',
        fontWeight: '500',
        backdropFilter: 'blur(10px)',
    },

    tagIcon: {
        fontSize: '16px',
    },

    heading: {
        fontSize: '62px',
        lineHeight: '1.2',
        marginBottom: '25px',
        fontWeight: '800',
        letterSpacing: '-0.02em',
    },

    highlight: {
        background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        display: 'inline-block',
    },

    subText: {
        color: '#cbd5e1',
        fontSize: '20px',
        lineHeight: '1.7',
        maxWidth: '700px',
        margin: '0 auto',
    },

    // Floating Elements
    floatingElements: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
    },

    floatItem1: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        fontSize: '20px',
        color: 'rgba(56,189,248,0.15)',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        animation: 'floatAround 12s ease-in-out infinite',
    },

    floatItem2: {
        position: 'absolute',
        bottom: '25%',
        right: '12%',
        fontSize: '24px',
        color: 'rgba(139,92,246,0.12)',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        animation: 'floatAround 15s ease-in-out infinite reverse',
    },

    floatItem3: {
        position: 'absolute',
        top: '60%',
        left: '15%',
        fontSize: '18px',
        color: 'rgba(6,182,212,0.1)',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        animation: 'floatAround 18s ease-in-out infinite',
    },

    /* BLUR EFFECTS */
    blur1: {
        position: 'absolute',
        width: '350px',
        height: '350px',
        background: '#0ea5e9',
        borderRadius: '50%',
        filter: 'blur(130px)',
        top: '-150px',
        left: '-150px',
        opacity: '0.2',
        zIndex: 1,
    },

    blur2: {
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: '#8b5cf6',
        borderRadius: '50%',
        filter: 'blur(130px)',
        bottom: '-120px',
        right: '-120px',
        opacity: '0.15',
        zIndex: 1,
    },

    /* CONTENT */
    content: {
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        gap: '35px',
        flexWrap: 'wrap',
        marginTop: '80px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    
    card: {
        position: 'relative',
        width: '340px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '28px',
        padding: '40px 30px',
        backdropFilter: 'blur(14px)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        cursor: 'pointer',
    },

    cardGlow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #38bdf8, #8b5cf6, transparent)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },

    icon: {
        fontSize: '52px',
        marginBottom: '25px',
        filter: 'drop-shadow(0 0 15px rgba(56,189,248,0.3))',
    },

    cardTitle: {
        fontSize: '26px',
        marginBottom: '20px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },

    cardText: {
        color: '#a0aec0',
        lineHeight: '1.7',
        fontSize: '15px',
    },

    cardBorder: {
        position: 'absolute',
        bottom: 0,
        left: '10%',
        width: '80%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)',
    },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes floatGlow {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
        50% { transform: translate(3%, 3%) scale(1.05); opacity: 0.6; }
    }

    @keyframes floatAround {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(10px, -15px) rotate(5deg); }
        50% { transform: translate(-5px, -25px) rotate(-3deg); }
        75% { transform: translate(-15px, -10px) rotate(2deg); }
    }

    .card:hover {
        transform: translateY(-8px);
        border-color: rgba(56,189,248,0.2);
        background: rgba(255,255,255,0.04);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .card:hover .cardGlow {
        opacity: 1;
    }

    @media (max-width: 768px) {
        .heading {
            font-size: 42px;
        }
        .subText {
            font-size: 16px;
        }
        .card {
            width: 100%;
            max-width: 340px;
        }
        .header {
            padding: 60px 20px;
        }
    }
`;
document.head.appendChild(styleSheet);

export default About;