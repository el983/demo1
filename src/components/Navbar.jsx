import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function FloatingBallMenu() {
  const navItems = [
    { text: "Home", icon: "fa-solid fa-house", path: "/" },
    { text: "Contact us", icon: "fa-solid fa-comments", path: "/contact" },
    { text: "About us", icon: "fa-solid fa-book-open", path: "/about" },
  ];

  return (
    <div className="container">
      <div className="logo">Elpis Learning Consultants LLP</div>

      <div className="navigation">
        <ul>
          {navItems.map((item, index) => (
            <li
  key={index}
  className={`list ${window.location.pathname === item.path ? "active" : ""}`}
>
  <NavLink to={item.path}>
    <span className="icon">
      <i className={item.icon}></i>
    </span>
    <span className="text">{item.text}</span>
  </NavLink>
</li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default FloatingBallMenu;
