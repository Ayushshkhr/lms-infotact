import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>Welcome to LMS Infotact</h1>
      <p>
        Dive into our world of knowledge and skills. We offer courses crafted with precision and delivered by industry
        experts to ensure your growth.
      </p>
      <p>
        Whether you're looking to change careers or sharpen existing skills, our light-brown-themed platform provides you
        with the perfect blend of warmth and professionalism.
      </p>
      <Link to="/courses" className="btn btn-primary">
        Explore Courses
      </Link>
    </div>
  );
};

export default Home;
