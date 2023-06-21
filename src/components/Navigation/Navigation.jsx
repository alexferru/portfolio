import React from "react";
import Styles from "./Navigation.css?inline";

const Navigation = () => {
  return (
    <>
      <style>{Styles}</style>
      <nav className="nav-default">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
