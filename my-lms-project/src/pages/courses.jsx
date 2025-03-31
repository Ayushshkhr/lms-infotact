import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    { title: "React Basics", description: "Learn the fundamentals of React.js." },
    { title: "Advanced JavaScript", description: "Master JavaScript concepts for efficient coding." },
    { title: "Web Development", description: "Become a full-stack web developer with hands-on projects." },
  ];

  return (
    <div className="wrapper">
      <h1 className="mb-4 fw-bold" style={{ fontFamily: "'Merriweather', serif" }}>
        Explore Our Courses
      </h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{course.title}</h5>
                <p className="card-text text-muted">{course.description}</p>
                <Link to="/form" className="btn btn-primary">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
