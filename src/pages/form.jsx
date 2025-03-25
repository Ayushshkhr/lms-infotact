import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" }}>
      <h2 style={{ textAlign: "center", color: "#6D4C41" }}>Get in Touch</h2>
      <p style={{ textAlign: "center", color: "#555" }}>We'd love to hear from you! Fill out the form below and our team will get back to you shortly.</p>
      
      {submitted ? (
        <div style={{ textAlign: "center", color: "green", fontSize: "18px", fontWeight: "bold", marginTop: "20px" }}>
          Thank you for reaching out! We'll contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your name" 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email" 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="Type your message here..." 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", height: "100px" }}
            />
          </div>

          <button type="submit" style={{ backgroundColor: "#6D4C41", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
