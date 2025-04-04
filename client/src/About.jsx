import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_content">
        <h1>About BlogVerse</h1>
        <p>
          Welcome to <span className="highlight">BlogVerse</span> – your space
          to express, explore, and engage. Whether you're a passionate writer
          sharing your thoughts or an avid reader discovering new ideas, this
          platform is built for you.
        </p>

        <p>
          Our goal is to create a vibrant community where knowledge meets
          creativity. Every post is a chance to inspire and be inspired. 💡
        </p>

        <p>
          Built with <span className="highlight">React</span>,{" "}
          <span className="highlight">Node.js</span>, and{" "}
          <span className="highlight">MongoDB</span>, BlogVerse is fast,
          responsive, and easy to use.
        </p>

        <p>
          Thank you for being a part of our journey! 📝 Start blogging and make
          your voice heard.
        </p>
      </div>
    </div>
  );
};

export default About;
