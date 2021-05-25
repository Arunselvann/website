import React, { Component } from "react";
import "./Home.css";
import img from "./Images/Arul.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <section id="home" className="home">
        <h1>Arunselvan Natesan</h1>
        <h2>Software Engineer and Aspiring Entrepreneur</h2>
        <img src={img} alt="home"></img>
      </section>
    );
  }
}

export default Home;
