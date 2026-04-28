import React from 'react'
import Projects from "../components/1project.png";
import Projects2 from "../components/2project.png";
import Projects3 from "../components/3project.png";


function Mywork() {

    const projects = [
        {
            id: 1,
            title: "AI Chat App",
            desc: "AI based chat application built with React & API integration.",
            image: Projects,
            link: "https://dainty-pony-d52426.netlify.app/"
        },
        {
            id: 2,
            title: "E-commerce Website",
            desc: "Modern online store with cart and payment UI.",
            image: Projects2,
            link: "https://rehman-e-commerce-web.netlify.app/"
        },
        {
            id: 3,
            title: "Portfolio Website",
            desc: "Personal portfolio website to showcase skills and work.",
            image: Projects3,
            link: "https://mymarketplacewebsite.netlify.app/"
        }
    ]

    return (
        <div style={styles.container}>

            <h1 style={styles.heading}>My Work </h1>
            <p style={styles.subHeading}>Here are some of my recent projects</p>

            <div style={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} style={styles.card}>

                        <img 
                            src={project.image} 
                            alt={project.title} 
                            style={styles.image}
                        />

                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>

                        <a 
                            href={project.link} 
                            style={styles.button}
                        >
                            View Project
                        </a>

                    </div>
                ))}
            </div>

        </div>
    )
}

const styles = {
    container: {
        textAlign: "center",
        fontFamily: "Arial",
        padding: "30px"
    },
    heading: {
        fontSize: "40px",
        marginBottom: "10px"
    },
    subHeading: {
        color: "#555",
        marginBottom: "30px"
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
    },
    card: {
        width: "550px",
        background: "#f9f9fc",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0px 4px 10px rgba(242, 6, 6, 0.1)",
        border :"2px solid black"
    },
    image: {
        width: "100%",
        borderRadius: "10px",
        border : "2px solid #3b08f3 "
    },
    button: {
        display: "inline-block",
        marginTop: "10px",
        padding: "8px 15px",
        background: "#22c55e",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px"
    }
}

export default Mywork