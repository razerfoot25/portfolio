import React from "react";

const Footer = () => {
  return (
    <footer className="contact">
      <h3 className="contact__header">
        Get in <span>touch</span>
      </h3>
      <h4 className="contact__subheader">jasonaldueza@gmail.com</h4>
      <div className="contact__social container">
        <img src="/images/iconmonstr-facebook-3.svg" alt="facebook" />
        <img src="/images/iconmonstr-linkedin-3.svg" alt="LinkedIn" />
        <img src="/images/iconmonstr-dribbble-3.svg" alt="Dribbble" />
      </div>
      <ul className="contact__list container" role="list">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
