import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="whatWeDo">
      <h2>What we do</h2>
      <div className="boxes">
        <div className="row">
          <div className="box">
            <object
              className="iconCalc"
              data="../svg/calculator.svg"
              type="image/svg+xml"
              alt="home"
              aria-label="iconCalc"
            />
          </div>
          <div className="box">
            <object
              className="iconClock"
              data="../svg/clock.svg"
              type="image/svg+xml"
              alt="home"
              aria-label="iconClock"
            />
          </div>
        </div>
        <div className="row">
          <div className="box">
            <object
              className="iconCloud"
              data="../svg/cloud.svg"
              type="image/svg+xml"
              alt="home"
              aria-label="iconCloud"
            />
          </div>
          <div className="box">
            <object
              className="iconHeart"
              data="../svg/heart.svg"
              type="image/svg+xml"
              alt="home"
              aria-label="iconHeart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
