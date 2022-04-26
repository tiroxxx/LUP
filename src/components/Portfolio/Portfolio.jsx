import React from 'react';
import "./Portfolio.css"
import PortfolioImg1 from "../../pictures/web-design-portfolio1.webp"
import PortfolioImg2 from "../../pictures/web-design-portfolio2.webp"
import PortfolioImg3 from "../../pictures/web-design-portfolio3.webp"
import PortfolioImg4 from "../../pictures/web-design-portfolio4.webp"
import PortfolioImg5 from "../../pictures/web-design-portfolio5.webp"
import PortfolioImg6 from "../../pictures/web-design-portfolio6.webp"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-heading">
        <h2>OUR WORK</h2>
        <p>
          We may not have met yet, but you’ve probably bumped into some of our
          work. Just below this paragraph you will find a hand selected taste
          test of our portfolio. Remember we’ve been in business since yesterday
          and have a few projects to show off.
        </p>
      </div>
      <div className="portfolio-project-container">
        <div className="portfolio-project">
          <img src={PortfolioImg1} alt="" />
        </div>
        <div className="portfolio-project">
          <img src={PortfolioImg2} alt="" />
        </div>
        <div className="portfolio-project">
          <img src={PortfolioImg3} alt="" />
        </div>
        <div className="portfolio-project">
          <img src={PortfolioImg4} alt="" />
        </div>
        <div className="portfolio-project">
          <img src={PortfolioImg5} alt="" />
        </div>
        <div className="portfolio-project">
          <img src={PortfolioImg6} alt="" />
        </div>
      </div>
    </div>
  );
}
