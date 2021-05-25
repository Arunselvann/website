import React, { Component } from "react";
import { MenuItems } from "./Menuitems";
import "./Navlinks.css";

class Navlinks extends Component {
  render() {
    return (
      <ul className={this.props.class}>
        {MenuItems.map((item) => {
          return (
            <li key={item.id}>
              <a
                onClick={() => {
                  this.props.onClick(item.id, this.props.isMobile);
                }}
                className={this.props.activeLink === item.id ? "active" : null}
                href={item.to}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Navlinks;
