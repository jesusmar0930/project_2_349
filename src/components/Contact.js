import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: your-email@example.com</p>
        <p>Phone: +1234567890</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form">
          <Field name="name" type="text" placeholder="Your Name" required />
          <Field name="email" type="email" placeholder="Your Email" required />
          <Field
            name="message"
            as="textarea"
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message</button>
        </Form>
      </Formik>
    </section>
  );
};

export default Contact;