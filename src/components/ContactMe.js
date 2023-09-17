import React from 'react';
import '../assets/css/footer.css'; // Import your CSS file'
import '../assets/css/contact.css'

function ContactMe() {
  return (
    <section id="contact-me">
      <div className="subtitle">
        <h3>Contact Me</h3>
      </div>
      <div className="content" id="contact-content">
        <a href="mailto:Josiahr71@gmail.com"><li>Josiahr71@gmail.com</li></a>
        <li>786-258-4940</li>
        <a href="https://twitter.com/JosiahR4321" target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
        <a href="https://github.com/Josiahr4321" target="_blank" rel="noopener noreferrer"><li>Github</li></a>
      </div>
    </section>
  );
}

export default ContactMe;
