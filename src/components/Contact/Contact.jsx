import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Contact.css";

function Contact() {
  const [emailData, setEmailData] = useState(false);

  // Handle email input change if there is data add email-input class to it
  const handleEmailChange = (e) => {
    setEmailData(!!e.target.value.trim());
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader title="Get in Touch" />
        <div className="form-container">
          <form className="contact-form">
            <h4 className="content-title">Message Me</h4>
            <div className="form-group">
              <div className="name-email">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="name-email">
                <input
                  onChange={handleEmailChange}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <label className={emailData ? "has-data" : ""} htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" required />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                required
                style={{ resize: "vertical" }}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
