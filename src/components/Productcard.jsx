import React from 'react'

function Productcard({ title, link, discription, image }) {

    const styles = {
        card: {
            width: "250px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            cursor: "pointer"
        },
        image: {
            width: "100%",
            height: "180px",
            objectFit: "cover"
        },
        content: {
            padding: "15px",
            textAlign: "center"
        },
        button: {
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            cursor: "pointer"
        }
    }

    return (
        <div style={styles.card}>
            <img style={styles.image} src={image} alt={title} />

            <div style={styles.content}>
                <h2>{title}</h2>
                <p>{discription}</p>

                {link.startsWith("http") ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button style={styles.button}>View Product</button>
                    </a>
                ) : (
                    <a href={link}>
                        <button style={styles.button}>View Product</button>
                    </a>
                )}
            </div>
        </div>
    )
}

export default Productcard