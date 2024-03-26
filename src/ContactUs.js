import React, { useState } from 'react';
import './ContactUs.css';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const databaseUrl = "https://react-project-nabankur-default-rtdb.asia-southeast1.firebasedatabase.app/contactForms.json";

    fetch(databaseUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      alert("Form submitted successfully!");
      setFormData({ name: '', email: '', phoneNumber: '' });
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    });
  };

  return (
  <div className="contact-us-container">
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit} className="contact-us-form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email ID:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

};

export default ContactUs;
