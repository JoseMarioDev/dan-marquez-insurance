// left side - logo w/ a tags to link back home
// middle - links in middle of navbar
// right - social link and phone

import React from 'react';
import Logo from '../../assets/img/logo1.svg';
import { navLinks, socialIcons } from '../../data';

const Nav = () => (
  <div className="navContainer">
    {/* left side logo */}
    <div className="innerContainer">
      <a href="/home">
        <img src={Logo} alt="logo" className="navLogo" />
      </a>
    </div>

    {/* middle section nav links */}
    <div className="innerContainer">
      <ul className="navLinks">
        {navLinks.map(link => (
          <a href={`/${link.pageLink}`} className="link">
            {link.name}
          </a>
        ))}
      </ul>
    </div>

    {/* right side, socials and phone */}
    <div className="innerContainer contactContainer">
      <div className="socialLinks">
        {socialIcons.map(icon => (
          <a href={`/${icon.link}`} className="icon">
            <img src={icon.icon} alt="social icon" />
          </a>
        ))}
      </div>
      <div className="phone">(555) 555 5555</div>
    </div>
  </div>
);

export default Nav;
