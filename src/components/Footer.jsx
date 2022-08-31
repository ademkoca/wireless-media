import React from 'react';


const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="social-icon">
          <object
            className="iconFB"
            data="../svg/facebook.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconFB"
          />
        </div>
        <div className="social-icon">
          <object
            className="iconTW"
            data="../svg/twitter.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconTW"
          />
        </div>
        <div className="social-icon">
          <object
            className="iconMail"
            data="../svg/email.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconMail"
          />
        </div>
      </div>
      <div className="footer-middle">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="toTop">
          <object
            className="iconTop"
            data="../svg/top.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconTop"
            onClick={toTop()}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
