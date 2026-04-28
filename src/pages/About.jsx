import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div style={styles.container}>

            {/* Header */}
            <section style={styles.header}>
                <h1>About Us</h1>
                <p>Learn more about what we do </p>
            </section>

            {/* Content */}
            <section style={styles.content}>
                <div style={styles.card}>
                    <h2>Who We Are</h2>
                    <p>
                        Hum ek modern web development aur AI tools based platform bana rahe hain
                        jahan tum apne projects aur ideas showcase kar sakte ho.
                    </p>
                </div>

                <div style={styles.card}>
                    <h2>Our Mission</h2>
                    <p>
                        Hamara goal hai simple aur powerful web apps banana jo users ke liye
                        easy aur useful hon.
                    </p>
                </div>

                <div style={styles.card}>
                    <h2>Why Choose Us</h2>
                    <p>
                        Fast performance , clean UI  aur modern technologies ke sath.
                    </p>
                </div>
            </section>

        </div>
    )
}

const styles = {
    container: {
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px"
    },
    header: {
        background: "#0f172a",
        color: "white",
        padding: "60px 20px",
        borderRadius: "10px"
    },
    content: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
    },
    card: {
        background: "#f1f5f9",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
    },
    button: {
        display: "inline-block",
        marginTop: "30px",
        padding: "10px 20px",
        background: "#22c55e",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px"
    }
}

export default About