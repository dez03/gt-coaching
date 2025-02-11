import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formResponse, setFormResponse] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormResponse(data.message);
      } else {
        setFormResponse('Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      setFormResponse('An error occurred.');
    }
  };

  return (
    <div>
      <header>
        <h1>Contact GT Coaching</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/transformations">Transformations</Link>
          <Link to="/sales">Plans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      
      <section id="contact-form-section">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          /><br/>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          /><br/>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required 
          /><br/>
          <button type="submit">Send Message</button>
        </form>
        <div id="contact-response">{formResponse}</div>
      </section>
      
      <footer>
        <p>&copy; 2025 GT Coaching</p>
      </footer>
    </div>
  );
};

export default Contact;