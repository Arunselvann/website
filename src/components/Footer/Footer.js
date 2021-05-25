import React, { Component } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section id="contact" className="social-container">
        <h3>Explore more about me or Say hello to collaborate.</h3>
        <div>
          <a
            href="https://www.linkedin.com/in/arunselvannatesan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icon social" />
          </a>
          <a
            href="https://www.facebook.com/arun.selvan.10/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="icon social" />
          </a>
          <a
            href="https://github.com/Arunselvann"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon social" />
          </a>
          <a
            href="mailto:arunselvan.n@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="icon social" />
          </a>
        </div>
      </section>
    );
  }
}

export default Footer;
