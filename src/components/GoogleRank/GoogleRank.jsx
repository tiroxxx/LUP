import React from 'react';
import './GoogleRank.css';

export default function GoogleRank() {
  return (
    <div className="google-rank">
      <div className="google-rank-heading">
        <h2>3 STEPS TO A HIGHER RANK ON GOOGLE</h2>
        <p>
          We provide in-house white hat Search Engine Optimization services that
          are extremely powerful and proven to rank your website at the top of
          Google. Serious business owners hire us and our trusted team of
          in-house nerds for real results.
        </p>
      </div>
      <div className="google-rank-steps-container">
        <div className="google-rank-step">
          <h1>1</h1>
          <h4>SCHEDULE A CALL</h4>
          <p>
            When you’re not seeing the Google rankings and the success you want
            in your business, it’s time to get you in the LUP.
          </p>
        </div>
        <div className="google-rank-step">
          <h1>2</h1>
          <h4>CUSTOM STRATEGY</h4>
          <p>
            During the call, talk about your goals. Before you hang up, you’ll
            have the outline to a strategy that will lead you to top rankings.
          </p>
        </div>
        <div className="google-rank-step">
          <h1>3</h1>
          <h4>HIGHER RANKINGS!</h4>
          <p>
            Start generating more traffic and more interest in your business.
            It’s 2020 and time to get a positive return on your investment.
          </p>
        </div>
      </div>
      <div className="google-rank-button">
          <button>GET STARTED</button>
          </div>
    </div>
  );
}
