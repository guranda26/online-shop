import React from "react";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Don't hesitate to ask a question.</p>
      <p>Our team is ready to answer all your questions.</p>
      <form action="#" className="form">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" />

        <label htmlFor="surname">Surname:</label>
        <input id="surname" type="text" />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>

        <input type="submit" value="Submit" />
      </form>

      <ul>
        <li>
          <span>Email:</span> contact@mail.com
        </li>
        <li>
          <span>Phone:</span> +995 595 76-39-32
        </li>
        <li>
          <span>Address:</span> Abashidze str, 32, Tbilisi, Georgia
        </li>
      </ul>
    </section>
  );
};

export default Contact;
