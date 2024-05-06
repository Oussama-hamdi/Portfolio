import React, { useState, useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import emailjs from "@emailjs/browser";
import "./Contact.css";

//TODO: Add an alert meassage to show the user that the email has been sent successfully
function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailDataValidation, setEmailDataValidation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      setEmailDataValidation(!!value.trim());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          console.log("Form data:", formData);
          console.log("Submitted form data:", new FormData(formRef.current));
          console.log("Successfully submitted the form!");
          // Clear the form fields after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader title="Get in Touch" />
        <div className="form-container">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <h4 className="content-title">Message Me</h4>
            <div className="form-group">
              <div className="name-email">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="name-email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  className={emailDataValidation ? "has-data" : ""}
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
