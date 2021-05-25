import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/Skills/Skills";

function App() {
  const style = {
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
  };
  return (
    <div style={style}>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
