import React, { useState } from "react";
import "./Contact.css";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // clear banner state
  };

  return (
    <section className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-desc">Have questions about our products or services? We'd love to hear from you.</p>

      {submitted && <div className="success-toast">🎉 Message Sent Successfully! We'll reply soon.</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit" className="contact-submit-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;