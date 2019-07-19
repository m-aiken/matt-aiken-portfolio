import React from 'react';

import './ContactPage.css';
import Footer from '../../footer/Footer';

const ContactPage = () => {
  return (
    <section id="contact">
      <h1 className="contact-header">Contact</h1>
      <p className="contact-desc">
        Please fill out the form below with any queries. I'd love to hear from
        you.
      </p>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div>
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
        </div>
        <label htmlFor="message">Message</label>
        <div>
          <textarea name="message" id="message" rows="10" />
        </div>
        <div data-netlify-recaptcha="true" />
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>

      <Footer />
    </section>
  );
};

export default ContactPage;
