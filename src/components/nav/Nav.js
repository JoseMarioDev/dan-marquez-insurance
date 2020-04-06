// left side - logo w/ a tags to link back home
// middle - links in middle of navbar
// right - social link and phone
import React from 'react';
import Logo from '../../assets/img/logo1.svg';

const Nav = () => (
  <div>
    <a href="/home">
      <img src={Logo} alt="logo" />
    </a>
  </div>
);

export default Nav;
