import '../styles/buttom-nav.css';

import React from "react";

import HomeImage from '../assets/home.png';
import LocationImage from '../assets/location.png';
import ChattingImage from '../assets/chatting.png';

const BottomNav = () => {
  return (
    <nav className="wrapper">
      <div>
        <img src={LocationImage}/>
        </div>
      <div>
        <img src={HomeImage}/>
      </div>
      <div>
        <img src={ChattingImage}/>
      </div>
    </nav>
  );
};

export default BottomNav;