import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Animated Spotlight Background */}
      <div className="hero-spotlight-animated" />
      <div className="hero-spotlight one"></div>


      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Manik Kaushik</span>, Web developer based in Noida
      </h1>
      <p>
        I’m a passionate Software Developer with hands-on experience in Java,
        HTML, CSS, JavaScript, and React.js. I specialize in building responsive,
        user-friendly web interfaces and love turning ideas into real-world
        applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect" >
          <a href="http://www.linkedin.com/in/manikkkk01">Linked In</a></div>
        <div className="hero-resume">
          <a href="/src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            My resume
          </a></div>
      </div>
    </div>
  );
};

export default Hero;

