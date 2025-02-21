// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';
import '../css/Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleCopyEmail = () => {
    const email = 'vapa.jesusangel@gmail.com';
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(e.target, 
      () => {
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 3000);
      }, 
      (error) => {
        console.log("Error:", error);
      }
    );

    e.target.reset(); 
  };

  return (
    <section id="contact" className="py-5 bg-light">    
      <div className="container d-flex flex-column align-items-center justify-content-center" 
           style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        
        <h2 className="contactTitle">Contact</h2>
        <p className="contact-cont">
          <i className="fas fa-envelope" title="Email"></i> Email 
          <span className="email" onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
            vapa.jesusangel@gmail.com
          </span>
          {copied && <span className="copied-message"> Copied!</span>}
        </p>
        
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/angel-vapa/" className="social-icon" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/JesusVaPa" className="social-icon" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" className="form-control" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" className="form-control" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" className="form-control" required></textarea>
          </div>
          <button type="submit" className="btn btn-outline-light btn-lg">Send Message</button>
        </form>

        {messageSent && <p className="success-message">Message sent successfully!</p>}
      </div>
    </section>
  );
};

export default Contact;
