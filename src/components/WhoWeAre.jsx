import React from 'react';
import Content from './Content';
import { boxes } from '../data';

const WhoWeAre = () => {
  return (
    <div className="whoWeAre">
      <h2>Who we are</h2>
      {boxes.map((box) => (
        <Content key={box.id} data={box} />
      ))}
    </div>
  );
};

export default WhoWeAre;
