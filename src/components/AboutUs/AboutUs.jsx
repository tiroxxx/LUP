import React from 'react';
import AboutUsImg from '../../pictures/web-design-about-us.jpg';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div id='about-us' className="about-us">
      <div className="about-us-img">
        <img src={AboutUsImg} alt="" />
      </div>
      <div className="about-us-info">
        <p>
          You’ve made it!. Our team
          has brought a spark to brands around your neighborhood. We are extremely
          passionate about what we do and have always put our clients first.
          From the initial meet to the finish line, our team’s uniquely personal
          attention will keep you in the "LUP" as your creative experience
          unfolds.
        </p>
      </div>
    </div>
  );
}
