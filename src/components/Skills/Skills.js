import React, { Component } from "react";
import { VscFileCode } from "react-icons/vsc";
import { AiOutlineAntCloud } from "react-icons/ai";
import { SiAzuredevops } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { HiDatabase } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
import "./Skills.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <section id="skills" className="container">
        <div className="header">
          <h1>Skills I Possess</h1>{" "}
        </div>
        <div className="skills">
          <section className="skill">
            <h4>Programming Languages</h4>
            <br />
            <p>Python (Boto3, Django and Flask) and SQL </p>
            <p>Javascript (ReactJS), HTML and CSS</p>
            <br />
            <VscFileCode className="skill-icon" />
          </section>
          <section className="skill">
            <h4>Cloud</h4>
            <br />
            <p>Amazon Web Services</p>
            <br />
            <AiOutlineAntCloud className="skill-icon" />
          </section>
          <section className="skill">
            <h4>DevOps</h4>
            <br />
            <p>Jenkins, Terraform, Docker, Kubernetes and Shell Scripting</p>
            <br />
            <SiAzuredevops className="skill-icon" />
          </section>
          <section className="skill">
            <h4>Business Intelligence</h4>
            <br />
            <p>Informatica and Oracle</p>
            <br />
            <GoGraph className="skill-icon" />
          </section>
          <section className="skill">
            <h4>Databases</h4>
            <br />
            <p>DynamoDB, MongoDB, Oracle, SAP HANA and OpenEdge</p>
            <br />
            <HiDatabase className="skill-icon" />
          </section>
          <section className="skill">
            <h4>MI Tools</h4>
            <br />
            <p>Numpy, Pandas, Matplotlib and Scikit-Learn</p>
            <br />
            <FaBrain className="skill-icon" />
          </section>
        </div>
      </section>
    );
  }
}

export default Skills;
