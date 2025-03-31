import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      title: "React Basics",
      description: "Learn the building blocks of React.js to create dynamic web applications.",
    },
    {
      title: "Advanced JavaScript",
      description: "Dive into advanced concepts and techniques for robust programming.",
    },
    {
      title: "UI/UX Design",
      description: "Craft user-friendly and visually appealing digital experiences.",
    },
    {
      title: "Data Science",
      description: "Discover data analytics and machine learning techniques for actionable insights.",
    },
  ];

  return (
    <div className="wrapper">
      <h1>Explore Our Courses</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
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
