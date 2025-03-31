import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="display-4 fw-bold">Welcome to Our LMS Platform</h1>
      <p className="lead text-muted">
        Transform your learning experience with professional tools and engaging courses.
      </p>
      <Link className="btn btn-primary btn-lg" to="/courses">
        Explore Courses
      </Link>
    </div>
  );
};

export default Home;
