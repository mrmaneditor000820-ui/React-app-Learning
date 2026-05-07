import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>

            {/* BACKGROUND GLOW */}
            <div style={styles.blur1}></div>
            <div style={styles.blur2}></div>

            <div style={styles.container}>

                {/* LOGO SECTION */}
                <div style={styles.section}>
                    <h2 style={styles.logo}>ABDUL Rehman</h2>
                    <p style={styles.text}>
                        Modern web development aur AI-based solutions create karne ka passion.
                    </p>
                </div>

                {/* LINKS */}
                <div style={styles.section}>
                    <h3 style={styles.title}>Quick Links</h3>

                    <ul style={styles.list}>
                        <li><a href="/" style={styles.link}>Home</a></li>
                        <li><a href="/" style={styles.link}>About</a></li>
                        <li><a href="/" style={styles.link}>My Work</a></li>
                        <li><a href="/" style={styles.link}>Contact</a></li>
                    </ul>
                </div>

                {/* SOCIAL */}
                <div style={styles.section}>
                    <h3 style={styles.title}>Follow Me</h3>

                    <div style={styles.socials}>
                        <a href="https://www.facebook.com/profile.php?id=61574081537967" style={styles.socialBtn}>Facebook</a>
                        <a href="https://www.youtube.com/@AIWithRehman-m8t" style={styles.socialBtn}>YouTube</a>
                        <a href="https://www.linkedin.com/in/abdul-rehman-763b11396/" style={styles.socialBtn}>LinkedIn</a>
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div style={styles.bottom}>
                © 2026 ABDUL Rehman | Built with ❤️ using React
            </div>

        </footer>
    );
};

const styles = {

    footer: {
        position: "relative",
        background: "#020617",
        color: "#fff",
        padding: "70px 20px 20px",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
    },

    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "40px",
        maxWidth: "1100px",
        margin: "auto",
        position: "relative",
        zIndex: 2,
    },

    section: {},

    logo: {
        fontSize: "28px",
        fontWeight: "bold",
        background: "linear-gradient(to right, #38bdf8, #0ea5e9)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "10px",
    },

    text: {
        fontSize: "14px",
        color: "#cbd5e1",
        lineHeight: "1.7",
    },

    title: {
        color: "#38bdf8",
        marginBottom: "15px",
    },

    list: {
        listStyle: "none",
        padding: 0,
        lineHeight: "2",
    },

    link: {
        color: "#cbd5e1",
        textDecoration: "none",
        transition: "0.3s",
        display: "inline-block",
    },

    socials: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },

    socialBtn: {
        color: "#cbd5e1",
        textDecoration: "none",
        padding: "6px 10px",
        border: "1px solid rgba(56,189,248,0.2)",
        borderRadius: "8px",
        transition: "0.3s",
    },

    bottom: {
        textAlign: "center",
        marginTop: "50px",
        paddingTop: "15px",
        borderTop: "1px solid rgba(56,189,248,0.2)",
        color: "#94a3b8",
        fontSize: "14px",
        position: "relative",
        zIndex: 2,
    },

    /* BACKGROUND EFFECTS */
    blur1: {
        position: "absolute",
        width: "300px",
        height: "300px",
        background: "#0ea5e9",
        borderRadius: "50%",
        filter: "blur(120px)",
        top: "-100px",
        left: "-100px",
        opacity: "0.3",
    },

    blur2: {
        position: "absolute",
        width: "250px",
        height: "250px",
        background: "#38bdf8",
        borderRadius: "50%",
        filter: "blur(120px)",
        bottom: "-100px",
        right: "-100px",
        opacity: "0.3",
    },
};

export default Footer;