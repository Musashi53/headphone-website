import React from "react";
import logo from '../../Assets/img/logo.png';

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <img src={logo} alt="nav-logo" />
      </a>
    </nav>
  );
}

export default Nav;