import React from "react";
import "../../../../styles/Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section contact bg-contactBackground p-5 text-formText"
    >
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p className="text-xl">We'd love to hear from you!</p>
      <form action="#" className="form bg-formBackground">
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
    </section>
  );
};

export default Contact;
