import React from 'react';
import Nav from '../components/Nav/Nav';
import linkedin from '../img/icons/linkedin.png';
import github from '../img/icons/github.png';
import email from '../img/icons/email.png';
import instagram from '../img/icons/instagram.png';
import linkvector from '../img/icons/Vector.png';

function Contact() {
  return (
    <div>
      <Nav />
      <div className='contact-container'>
        <p>Get in touch with me on socials!</p>
        <div className='contact-socials-container'>
          <img src={linkedin} alt='Linkedin' />
          <img src={email} alt='Email' />
          <img src={github} alt='Github' />
          <img src={instagram} alt='Instagram' />
        </div>
      </div>
      <div className='contact-under-container'>
        <p>I am currently looking for a job, feel free to send me a message.</p>
        <p>Or have a look at my resume</p>
        <img src={linkvector} alt='Link to resume' />
      </div>
    </div>
  );
}

export default Contact;
