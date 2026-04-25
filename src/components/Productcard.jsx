import React from 'react'

function Productcard({ title, price, discription, image }) {

    const styles = {
        card: {
            width: "250px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            transition: "0.3s",
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

        title: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "8px"
        },

        desc: {
            fontSize: "14px",
            color: "#777",
            marginBottom: "10px"
        },

        price: {
            fontSize: "18px",
            color: "#28a745",
            fontWeight: "bold",
            marginBottom: "10px"
        },

        button: {
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s"
        }
    }

    return (
        <div style={styles.card}>
            <img style={styles.image} src={image} alt={title} />

            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.desc}>{discription}</p>
                <h3 style={styles.price}>${price}</h3>
                <button style={styles.button}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Productcard