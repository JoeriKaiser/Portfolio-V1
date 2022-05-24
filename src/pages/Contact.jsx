import React from 'react';
import linkedin from '../img/icons/linkedin.png';
import github from '../img/icons/github.png';
import linkvector from '../img/icons/Vector.png';
import { Link } from 'react-router-dom';
import pdf from '../../src/img/documents/jk_resume.pdf';

import emailIcon from '../img/icons/email.png';

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
      {props.children}
    </a>
  );
}

function Contact() {
  return (
    <div>
      <div className='contact-container'>
        <p>Get in touch with me on socials!</p>
        <div className='contact-socials-container'>
          <Link to='linkedin'>
            <img src={linkedin} alt='Linkedin' />
          </Link>
          <Mailto
            email='joeri.kaiser@hotmail.com'
            subject='Contact from personal site'
            body='Hi'
          >
            <img src={emailIcon} alt='email' />
          </Mailto>
          <Link to={'github'}>
            <img src={github} alt='Github' />
          </Link>
        </div>
      </div>
      <div className='contact-under-container'>
        <p>I am currently looking for a job, feel free to send me a message.</p>
        <p>Or have a look at my resume</p>
        <a href={pdf}>
          <img src={linkvector} alt='Link to resume' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
