import React from 'react';

function About() {
    return (
        <div style={styles.container}>

            {/* HEADER */}
            <section style={styles.header}>

                <div style={styles.blur1}></div>
                <div style={styles.blur2}></div>

                <div style={styles.headerContent}>
                    <p style={styles.tag}>✨ About Our Platform</p>

                    <h1 style={styles.heading}>
                        We Create <span style={styles.highlight}>Modern Digital Solutions</span>
                    </h1>

                    <p style={styles.subText}>
                        Professional web development aur AI based experiences
                        jo modern UI aur smooth performance provide karte hain.
                    </p>
                </div>

            </section>

            {/* CONTENT */}
            <section style={styles.content}>

                <div style={styles.card}>
                    <div style={styles.icon}>🚀</div>

                    <h2 style={styles.cardTitle}>Who We Are</h2>

                  <p style={styles.cardText}>
    We are building a modern web development and AI tools based platform
    where users can showcase their projects and creative ideas professionally.
</p>
                </div>

                <div style={styles.card}>
                    <div style={styles.icon}>🎯</div>

                    <h2 style={styles.cardTitle}>Our Mission</h2>
<p style={styles.cardText}>
    Our mission is to create simple, fast and powerful web applications
    that provide users with a smooth and useful experience.
</p>
                </div>

                <div style={styles.card}>
                    <div style={styles.icon}>💎</div>

                    <h2 style={styles.cardTitle}>Why Choose Us</h2>

                   <p style={styles.cardText}>
    Premium UI design, fast performance and modern technologies
    combined to deliver a professional digital experience.
</p>
                </div>

            </section>

        </div>
    );
}

const styles = {

    container: {
        background: '#020617',
        color: 'white',
        padding: '80px 20px',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
    },

    /* HEADER */
    header: {
        position: 'relative',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '30px',
        padding: '90px 30px',
        textAlign: 'center',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    },

    headerContent: {
        position: 'relative',
        zIndex: '2',
        maxWidth: '850px',
        margin: 'auto',
    },

    tag: {
        display: 'inline-block',
        background: 'rgba(56,189,248,0.1)',
        border: '1px solid rgba(56,189,248,0.2)',
        padding: '10px 22px',
        borderRadius: '30px',
        color: '#38bdf8',
        marginBottom: '25px',
        fontSize: '15px',
    },

    heading: {
        fontSize: '58px',
        lineHeight: '1.2',
        marginBottom: '25px',
        fontWeight: 'bold',
    },

    highlight: {
        background: 'linear-gradient(to right, #38bdf8, #0ea5e9)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },

    subText: {
        color: '#cbd5e1',
        fontSize: '20px',
        lineHeight: '1.8',
    },

    /* CONTENT */
    content: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        marginTop: '70px',
    },

    card: {
        width: '320px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '35px 28px',
        backdropFilter: 'blur(14px)',
        transition: '0.3s',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    },

    icon: {
        fontSize: '45px',
        marginBottom: '20px',
    },

    cardTitle: {
        fontSize: '26px',
        marginBottom: '18px',
        color: '#38bdf8',
    },

    cardText: {
        color: '#cbd5e1',
        lineHeight: '1.8',
        fontSize: '16px',
    },

    /* BLUR EFFECTS */
    blur1: {
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: '#0ea5e9',
        borderRadius: '50%',
        filter: 'blur(120px)',
        top: '-100px',
        left: '-100px',
        opacity: '0.35',
    },

    blur2: {
        position: 'absolute',
        width: '250px',
        height: '250px',
        background: '#38bdf8',
        borderRadius: '50%',
        filter: 'blur(120px)',
        bottom: '-100px',
        right: '-100px',
        opacity: '0.35',
    },
};

export default About;