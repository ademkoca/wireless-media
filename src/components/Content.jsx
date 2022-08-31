import React, { useState } from 'react';

const Content = (props) => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="content">
      <img src={props.data.img} alt={props.data.title} />
      <div className="box-text">
        <h3>{props.data.title}</h3>
        <p className={`${showText ? 'visible' : ''}`}>{props.data.text}</p>
        <div className="showMore" onClick={() => setShowText(!showText)}>
          Show {`${!showText ? 'more' : 'less'}`}
        </div>
      </div>
    </div>
  );
};

export default Content;
