import React, { Component } from "react";
import Navlinks from "./Navlinks/Navlinks";
import "./Navbar.css";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

class Navbar extends Component {
  state = {
    open: false,
    activeLink: 1,
  };

  menuIcon = (<ImMenu className="menu" onClick={() => this.toggleMenu()} />);
  closeIcon = (
    <IoMdClose className="menu" onClick={() => this.toggleMenu()} />
  );

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  toggleClass = (id) => {
    console.log("id " + id);
    this.setState({ activeLink: id });
  };

  onClick = (id, isMobile = false) => {
    this.toggleClass(id);
    if (isMobile) {
      this.toggleMenu();
    }
  };

  render() {
    return (
      <nav className="navbar">
        <a className="navbar-logo" href="/website">
          Arunselvan Natesan
        </a>
        {this.state.open ? this.closeIcon : this.menuIcon}
        {this.state.open ? (
          <Navlinks
            class="nav-menu-mobile"
            onClick={this.onClick}
            isMobile={true}
            activeLink={this.state.activeLink}
          />
        ) : (
          <Navlinks
            class="nav-menu"
            onClick={this.onClick}
            isMobile={false}
            activeLink={this.state.activeLink}
          />
        )}
      </nav>
    );
  }
}

export default Navbar;
