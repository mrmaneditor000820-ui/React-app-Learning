import React from 'react';
import projects from '../components/utils/Product';

function Mywork() {

    return (
        <div style={styles.container}>

            {/* HEADER */}
            <div style={styles.header}>

                <p style={styles.tag}>🚀 Portfolio Showcase</p>

                <h1 style={styles.heading}>
                    My <span style={styles.highlight}>Recent Work</span>
                </h1>

                <p style={styles.subHeading}>
                    Here are some modern projects that I recently designed and developed.
                </p>

            </div>

            {/* PROJECTS */}
            <div style={styles.grid}>

                {projects.map((project) => (
                    <div key={project.id} style={styles.card}>

                        <div style={styles.imageBox}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={styles.image}
                            />
                        </div>

                        <div style={styles.content}>

                            <h2 style={styles.title}>
                                {project.title}
                            </h2>

                            <p style={styles.desc}>
                                {project.desc}
                            </p>

                            <a
                                href={project.link}
                                target='_blank'
                                rel='noreferrer'
                                style={styles.button}
                            >
                                View Project →
                            </a>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

const styles = {

    container: {
        background: '#020617',
        minHeight: '100vh',
        padding: '90px 20px',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
    },

    /* HEADER */
    header: {
        textAlign: 'center',
        marginBottom: '70px',
    },

    tag: {
        display: 'inline-block',
        padding: '10px 22px',
        borderRadius: '30px',
        background: 'rgba(56,189,248,0.1)',
        border: '1px solid rgba(56,189,248,0.2)',
        color: '#38bdf8',
        marginBottom: '20px',
        fontSize: '15px',
    },

    heading: {
        fontSize: '60px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },

    highlight: {
        background: 'linear-gradient(to right, #38bdf8, #0ea5e9)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },

    subHeading: {
        color: '#cbd5e1',
        fontSize: '20px',
        maxWidth: '700px',
        margin: 'auto',
        lineHeight: '1.8',
    },

    /* GRID */
    grid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '35px',
        flexWrap: 'wrap',
    },

    /* CARD */
    card: {
        width: '500px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        overflow: 'hidden',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        transition: '0.3s',
    },

    imageBox: {
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '230px',
        objectFit: 'cover',
        transition: '0.4s',
    },

    content: {
        padding: '25px',
    },

    title: {
        fontSize: '28px',
        marginBottom: '15px',
        color: '#38bdf8',
    },

    desc: {
        color: '#cbd5e1',
        lineHeight: '1.8',
        fontSize: '16px',
        marginBottom: '25px',
    },

    button: {
        display: 'inline-block',
        padding: '13px 24px',
        borderRadius: '12px',
        textDecoration: 'none',
        background: 'linear-gradient(to right, #0ea5e9, #38bdf8)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15px',
        boxShadow: '0 10px 25px rgba(14,165,233,0.3)',
    },

};

export default Mywork;