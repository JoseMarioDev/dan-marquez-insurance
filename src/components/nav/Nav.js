// left side - logo w/ a tags to link back home
// middle - links in middle of navbar
// right - social link and phone

import React from 'react';
import Logo from '../../assets/img/logo1.svg';

const Nav = () => (
  <div className="navContainer">
    {/* left side logo */}
    <a href="/home">
      <img src={Logo} alt="logo" className="navLogo" />
    </a>
    {/* middle section nav links */}
    <ul className="navLinks">
      <a href="/about" className="navLink">
        About
      </a>
    </ul>
    {/* right side, socials and phone */}
    <div className="socials">socials here</div>
  </div>
);

export default Nav;
