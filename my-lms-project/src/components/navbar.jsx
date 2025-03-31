import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      backgroundColor: "#a6896f", /* Light brown for navbar */
      color: "#ffffff",
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
      marginLeft: "15px",
      transition: "color 0.3s",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={{ ...styles.link, fontWeight: "bold" }}>
        LMS Infotact
      </Link>
      <div>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/courses" style={styles.link}>
          Courses
        </Link>
        <Link to="/form" style={styles.link}>
          Enroll
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
