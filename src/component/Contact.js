import React, { useState } from 'react';
import '../styles/Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    console.log('Form data submitted:', formData);

    setIsSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank you for reaching out!</h2>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
