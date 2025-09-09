import React, { useEffect } from 'react';
import './Hero.css';
import profile from '../../assets/profile_img.jpg';

const Hero = () => {
  useEffect(() => {
    // This script dynamically loads the Unicorn Studio library.
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    script.async = true;

    // Use a setTimeout to ensure the script is loaded after the DOM element.
    script.onload = () => {
      setTimeout(() => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      }, 0);
    };
    document.body.appendChild(script);

    // Cleanup function to destroy the scene when the component unmounts
    return () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy();
        window.UnicornStudio.isInitialized = false;
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="home" className="hero">
      {/* This div is the container for the Unicorn Studio animation */}
      <div 
        data-us-project="3bkVoygk9WTzitN9rEgq" 
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '1000px', zIndex: -1 }}
      />
      
      <img src={profile} alt="Profile" />
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
        <div className="hero-connect">
          <a href="http://www.linkedin.com/in/manikkkk01" target="_blank" rel="noopener noreferrer">Linked In</a>
        </div>
        <div className="hero-resume">
          <a href="#" target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
