import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form-section">
        <div className="container">
        <h3>Contact Us</h3>
        <form className="contact-form">
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
         <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
         </div>
         <button type="submit" className="btn">Submit</button>
        </form>
        </div>
        </section>
    );
};

export default ContactForm;
