import React from 'react';

function AboutMe() {
  return (
    <section id="about-me">
      <div className="subtitle">
        <h3>About Me</h3>
      </div>
      <div className="content" id="about-content">
        <img src="./assets/img/Josiah.jpg" alt="Photo of me" />
        <p>
          My name is Josiah Rivera, and I am 22 years old. I am currently learning to code at the University of Miami coding bootcamp. My goal is to become a graduate from this boot camp and become a software developer. My hobbies include watching movies, writing, and playing video games.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
