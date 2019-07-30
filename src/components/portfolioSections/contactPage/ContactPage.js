import React from 'react';

import './ContactPage.css';
import Footer from '../../footer/Footer';

const ContactPage = () => {
  return (
    <section id="contact">
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="contact-desc">
          Please fill out the form with any queries, I'll reply as soon as
          possible.
        </p>
        <div className="contact-inputs">
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
        </div>
        <div className="textbox">
          <label htmlFor="message">Message</label>
          <div>
            <textarea name="message" id="message" rows="9" />
          </div>
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
