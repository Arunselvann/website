import React, { Component } from "react";
import "./Aboutme.css";

class Aboutme extends Component {
  state = {};
  render() {
    return (
      <section id="aboutme" className="aboutme">
        <div className="content">
          <h4>About Me</h4>
          <p>
            Fiddling with technologies is what I like the most. However, I love
            to talk about all sorts of stuff.
          </p>
          <p>
            As a Software engineer, I have acquired a wide range of skills and
            experience by working on diversified projects of Global MNCs.
          </p>
          <p>
            An unsettling mindset and yearn to become an entrepreneur persuade
            me to explore new things and meet new people.
          </p>
          <p>Have crazy ideas to discuss? Ping me any time.</p>
          <br />
          <h4>Education:</h4>
          <p>
            B.Tech in Information Technology – Anna University, Chennai, India.{" "}
          </p>
          <p>
            MS in Computing & Data Analytics – Saint Mary’s University, Halifax,
            Canada.
          </p>
        </div>
      </section>
    );
  }
}

export default Aboutme;
