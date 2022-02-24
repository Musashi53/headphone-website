import React, { useState } from "react";
import logo from '../../Assets/img/logo.png';
import { NavContainer, NavMenu, NavList, NavItem, NavLink, NavClose, NavToggle, NavLogo } from './styles';

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <NavContainer>
      <NavLogo href="#">
        <img src={logo} alt="nav-logo" />
      </NavLogo>
      <NavMenu open={open}>
        <NavList>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="specs">Specs</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#case">Case</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#products">Products</NavLink>
          </NavItem>
        </NavList>

        <NavClose onClick={() => setOpen(false)}>
          <i className="ri-close-line"/>
        </NavClose>
      </NavMenu>

      <NavToggle onClick={() => setOpen(true)}>
        <i className="ri-function-line"/>
      </NavToggle>
      
    </NavContainer>
  );
}

export default Nav;