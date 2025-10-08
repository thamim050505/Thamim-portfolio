import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__inner">
          
            <div className="contact_inner_content">
              <h1>Contact</h1>
              <p>Get in touch with me via email.</p>
              
              <h2>Let's Connect</h2>
              <form
                action="https://formsubmit.co/kameelthamim6@gmail.com"
                method="POST"
                className="form "
              >
                <label htmlFor="Name">Name</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="Email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="Name">Mobile Number</label>
                <input type="tel" name="number" id="number" required />
                <label htmlFor="Name">Convey the message</label>
                <textarea name="message" id="message" rows={"5"} required />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Contact;