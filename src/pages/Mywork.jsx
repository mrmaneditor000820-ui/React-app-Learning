import React from 'react';
import projects from '../components/utils/Product';

function Mywork() {

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
            <div style={styles.header}>
                <div style={styles.headerGlow}></div>
                
                <p style={styles.tag}>
                    <span style={styles.tagIcon}>🚀</span> Portfolio Showcase
                </p>

                <h1 style={styles.heading}>
                    My <span style={styles.highlight}>Recent Work</span>
                </h1>

                <p style={styles.subHeading}>
                    Here are some modern projects that I recently designed and developed.
                </p>

                {/* Decorative Line */}
                <div style={styles.decorativeLine}>
                    <span style={styles.lineDot}></span>
                    <span style={styles.lineDot}></span>
                    <span style={styles.lineDot}></span>
                </div>
            </div>

            {/* PROJECTS GRID */}
            <div style={styles.grid}>

                {projects.map((project, index) => (
                    <div key={project.id} style={styles.card} data-aos="fade-up">
                        <div style={styles.cardGlow}></div>
                        
                        <div style={styles.imageBox}>
                            <div style={styles.imageOverlay}>
                                <span style={styles.viewIcon}>🔍</span>
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={styles.image}
                            />
                            <div style={styles.techBadge}>
                                <span>Latest Project</span>
                            </div>
                        </div>

                        <div style={styles.cardContent}>
                            <div style={styles.titleRow}>
                                <h2 style={styles.title}>
                                    {project.title}
                                </h2>
                                <div style={styles.iconArrow}>→</div>
                            </div>

                            <p style={styles.desc}>
                                {project.desc}
                            </p>

                            <div style={styles.cardFooter}>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noreferrer'
                                    style={styles.button}
                                >
                                    View Project
                                    <span style={styles.buttonArrow}>→</span>
                                </a>
                                <div style={styles.shine}></div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Floating Particles */}
            <div style={styles.floatingParticles}>
                {[...Array(15)].map((_, i) => (
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
        position: 'relative',
        background: '#0a0a0a',
        minHeight: '100vh',
        padding: '90px 20px',
        fontFamily: "'Inter', 'Poppins', -apple-system, sans-serif",
        color: 'white',
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
        background: 'radial-gradient(ellipse at 50% 30%, #0f0f1a, #0a0a0a)',
    },

    glowOrb1: {
        position: 'absolute',
        top: '5%',
        right: '-15%',
        width: '60%',
        height: '60%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
        animation: 'floatGlow 20s ease-in-out infinite',
    },

    glowOrb2: {
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '50%',
        height: '50%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        animation: 'floatGlow 25s ease-in-out infinite reverse',
    },

    glowOrb3: {
        position: 'absolute',
        top: '40%',
        left: '25%',
        width: '40%',
        height: '40%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
        animation: 'floatGlow 18s ease-in-out infinite',
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
        backgroundSize: '50px 50px',
        zIndex: 1,
    },

    darkOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
        zIndex: 2,
    },

    // HEADER
    header: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        marginBottom: '80px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    headerGlow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1,
    },

    tag: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 24px',
        borderRadius: '50px',
        background: 'rgba(56,189,248,0.08)',
        border: '1px solid rgba(56,189,248,0.2)',
        color: '#38bdf8',
        marginBottom: '25px',
        fontSize: '14px',
        fontWeight: '500',
        backdropFilter: 'blur(10px)',
    },

    tagIcon: {
        fontSize: '16px',
    },

    heading: {
        fontSize: '62px',
        marginBottom: '20px',
        fontWeight: '800',
        letterSpacing: '-0.02em',
    },

    highlight: {
        background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },

    subHeading: {
        color: '#cbd5e1',
        fontSize: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.7',
    },

    decorativeLine: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '35px',
    },

    lineDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#38bdf8',
        opacity: 0.5,
        animation: 'pulse 1.5s infinite',
    },

    // GRID
    grid: {
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        maxWidth: '1300px',
        margin: '0 auto',
    },

    // CARD
    card: {
        position: 'relative',
        width: '500px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '28px',
        overflow: 'hidden',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
        zIndex: 2,
    },

    imageBox: {
        position: 'relative',
        overflow: 'hidden',
        height: '260px',
    },

    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 2,
        cursor: 'pointer',
    },

    viewIcon: {
        fontSize: '40px',
        color: 'white',
        transform: 'scale(0.8)',
        transition: 'transform 0.3s ease',
    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },

    techBadge: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'rgba(56,189,248,0.9)',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '11px',
        fontWeight: '600',
        color: 'white',
        backdropFilter: 'blur(5px)',
        zIndex: 3,
        letterSpacing: '0.5px',
    },

    cardContent: {
        padding: '28px',
    },

    titleRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
    },

    title: {
        fontSize: '26px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: 0,
    },

    iconArrow: {
        fontSize: '24px',
        color: '#38bdf8',
        opacity: 0,
        transform: 'translateX(-10px)',
        transition: 'all 0.3s ease',
    },

    desc: {
        color: '#a0aec0',
        lineHeight: '1.7',
        fontSize: '15px',
        marginBottom: '25px',
    },

    cardFooter: {
        position: 'relative',
        display: 'inline-block',
    },

    button: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 28px',
        borderRadius: '40px',
        textDecoration: 'none',
        background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 5px 20px rgba(14,165,233,0.3)',
        transition: 'all 0.3s ease',
        position: 'relative',
        zIndex: 2,
    },

    buttonArrow: {
        transition: 'transform 0.3s ease',
    },

    shine: {
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transition: 'left 0.5s ease',
        borderRadius: '40px',
        pointerEvents: 'none',
    },

    // Floating Particles
    floatingParticles: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        pointerEvents: 'none',
    },

    particle: {
        position: 'absolute',
        bottom: '-10px',
        width: '2px',
        height: '2px',
        background: '#38bdf8',
        borderRadius: '50%',
        opacity: 0.3,
        animation: 'floatParticle 10s linear infinite',
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
        0%, 100% { transform: scale(1); opacity: 0.4; }
        50% { transform: scale(1.3); opacity: 0.8; }
    }

    @keyframes floatParticle {
        0% { transform: translateY(100vh) translateX(0); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
    }

    .card:hover {
        transform: translateY(-12px);
        border-color: rgba(56,189,248,0.2);
        background: rgba(255,255,255,0.04);
        box-shadow: 0 30px 50px rgba(0,0,0,0.4);
    }

    .card:hover .cardGlow {
        opacity: 1;
    }

    .card:hover .image {
        transform: scale(1.08);
    }

    .card:hover .imageOverlay {
        opacity: 1;
    }

    .card:hover .imageOverlay .viewIcon {
        transform: scale(1);
    }

    .card:hover .iconArrow {
        opacity: 1;
        transform: translateX(0);
    }

    .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(14,165,233,0.5);
    }

    .button:hover .buttonArrow {
        transform: translateX(5px);
    }

    .button:hover ~ .shine {
        left: 100%;
    }

    @media (max-width: 768px) {
        .heading {
            font-size: 42px;
        }
        .subHeading {
            font-size: 16px;
        }
        .card {
            width: 100%;
            max-width: 450px;
        }
        .title {
            font-size: 22px;
        }
        .imageBox {
            height: 220px;
        }
    }
`;
document.head.appendChild(styleSheet);

export default Mywork;