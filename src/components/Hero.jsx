import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel at any time.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-area">
          <input type="email" placeholder="Email address" />
          <button>Get Started ➤</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;