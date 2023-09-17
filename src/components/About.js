import React from 'react';
import '../assets/css/aboutme.css'; // Import your CSS file
import profileImage from '../assets/Josiah.jpg'; // Import your profile image

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-header">Who Am I?</div>
      <div className="about-me-content">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-me-details">
          <div className="about-me-title">Josiah Rivera</div>
          <div className="about-me-text">
            Full-Stack Web Developer
            <br />
            University of Miami Coding Bootcamp Student
            <br />
            Movie Enthusiast, Writer, Gamer
          </div>
        </div>
      </div>
      <div className="about-me-description">
        <p>
          My name is Josiah Rivera, and I am 22 years old. I am currently learning to code at the University of Miami coding bootcamp. My goal is to become a graduate from this boot camp and become a software developer. My hobbies include watching movies, writing, and playing video games.
        </p>
        
      </div>
     
    </div>
  );
}

export default AboutMe;
