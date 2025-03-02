import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form action="https://formspree.io/f/xkgodzaj" method="POST">
        <input type="text" name="username" id="" placeholder="Enter your name...."/>
        <input type="email" name="email" id="" placeholder="Enter your email...."/>
        <input type="text" name="message" id="" placeholder="Enter your message...." required/>
        <button type="submit">Send</
        button>
      </form>
    </div>
  );
};

export default Contact;
