// import logo from './logo.svg';
import './style/main.css';
import Nav from './components/Nav';

import { Slider } from './components/Slider';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default App;
