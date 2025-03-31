import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    gender: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Successful!");
  };

  return (
    <div className="wrapper">
      <h1 className="mb-4 fw-bold">Enrollment Form</h1>
      <form onSubmit={handleSubmit} className="p-4 shadow-sm bg-light rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label fw-bold">
            Select Course
          </label>
          <select
            id="course"
            name="course"
            className="form-select"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose...
            </option>
            <option value="React Basics">React Basics</option>
            <option value="Advanced JavaScript">Advanced JavaScript</option>
            <option value="Web Development">Web Development</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label fw-bold">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="form-select"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
