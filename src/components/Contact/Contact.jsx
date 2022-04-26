import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form
          action="https://formsubmit.co/christianmarquez41@gmail.com"
          method="POST"
        >
          <div className="form-fields">
            <div className="contact-info">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <textarea
              id="message"
              placeholder="Your Message..."
              class="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>

          <input type="hidden" name="_template" value="box" />

          <button id="button" type="submit">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
