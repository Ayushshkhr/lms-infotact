import React from "react";

const About = () => {
  const styles = {
    container: { textAlign: "center", padding: "50px", fontFamily: "Arial, sans-serif", backgroundColor: "#f0f0f0" },
    headline: { fontSize: "36px", fontWeight: "bold", marginBottom: "20px" },
    subtext: { fontSize: "18px", color: "#555", lineHeight: "1.6" },
    cardContainer: { display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" },
    card: {
      width: "300px",
      margin: "10px",
      padding: "20px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    cardTitle: { fontSize: "20px", fontWeight: "bold", marginBottom: "10px" },
    cardText: { fontSize: "16px", color: "#555" },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.headline}>About Our Platform</h1>
      <p style={styles.subtext}>
        Our mission is to empower learners and educators with tools that inspire growth and excellence. We aim to bridge
        the gap between education and technology.
      </p>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Excellence</h3>
          <p style={styles.cardText}>We provide top-notch learning experiences with quality in every step.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Innovation</h3>
          <p style={styles.cardText}>We continuously innovate to make learning more interactive and engaging.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Accessibility</h3>
          <p style={styles.cardText}>We design for inclusivity, breaking barriers to education for all.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
