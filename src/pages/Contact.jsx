import React from 'react';
import linkedin from '../img/icons/linkedin.png';
import github from '../img/icons/github.png';
import linkvector from '../img/icons/Vector.png';
import { Link } from 'react-router-dom';
import pdf from '../../src/img/documents/jk_resume.pdf';
import emailIcon from '../img/icons/email.png';
import variants from '../context/main-variants';
import { motion } from 'framer-motion';

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
      {props.children}
    </a>
  );
}

function Contact() {
  return (
    <motion.div
      variants={variants}
      initial='enter'
      animate='center'
      transition={{ delay: 0.1 }}
    >
      <div className='contact-container'>
        <p>Get in touch with me on socials!</p>
        <div className='contact-socials-container'>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to='linkedin'>
              <img src={linkedin} alt='Linkedin' />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Mailto
              email='joeri.kaiser@hotmail.com'
              subject='Contact from personal site'
              body='Hi'
            >
              <img src={emailIcon} alt='email' />
            </Mailto>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'github'}>
              <img src={github} alt='Github' />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className='contact-under-container'>
        <p>I am currently looking for a job, feel free to send me a message.</p>
        <p>Or have a look at my resume</p>
        <motion.div whileHover={{ scale: 1.3 }}>
          <a href={pdf}>
            <img src={linkvector} alt='Link to resume' />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
