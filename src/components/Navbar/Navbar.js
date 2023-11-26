import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';

const Navbar = ({ user, children }) => {
  

  return (
    
    <Nav aria-label="Main navigation">
      <Bars />
      <NavMenu>

        <NavLink to='/' activeStyle>
          Home
        </NavLink>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/contact' activeStyle>
          Contact
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;