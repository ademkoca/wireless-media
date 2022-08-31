import React, { useState } from 'react';
import Separator from './Separator';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="left">
          <div className="logo">
            <a href="/">
              <img src="../png/logo.png" alt="Wireless Media logo" />
            </a>
          </div>
        </div>
        <div className="middle">
          <object
            className="iconHome"
            data="../svg/home.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconHome"
          />
          <object
            className="iconAbout"
            data="../svg/about.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconAbout"
          />
          <object
            className="iconWork"
            data="../svg/our-work.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconWork"
          />
          <object
            className="iconContact"
            data="../svg/email.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconContact"
          />
          {/* <img src="../svg/home.svg" alt="home" /> */}
          {/* <img src="../svg/about.svg" alt="about" />
          <img src="../svg/our-work.svg" alt="our work" />
          <img src="../svg/email.svg" alt="email" /> */}
        </div>
        <div className="middle-links">
          <ul>
            <li>
              <a className="linkHome" href="#">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a className="linkAbout" href="#">
                About us
              </a>
            </li>
            <li>/</li>
            <li>
              <a className="linkOurWork" href="#">
                Our Work
              </a>
            </li>
            <li>/</li>
            <li>
              <a className="linkContact" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className={`menuItem burger${menuOpen ? ' green' : ''}`}>
            <img
              src="../svg/burger.svg"
              alt="menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <div className="menuItem">
            <img
              src="../svg/search.svg"
              alt="search"
              onClick={() => setSearchOpen(!searchOpen)}
            />
          </div>
        </div>
      </nav>
      <div className={`searchBar ${searchOpen ? 'visible' : ''}`}>
        <input type="search" />
      </div>
      {!menuOpen && <Separator />}
      <nav className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li className="nav-home">HOME</li>
          <li className="nav-about">ABOUT US</li>
          <li className="nav-work">OUR WORK</li>
          <li className="nav-contact">CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
