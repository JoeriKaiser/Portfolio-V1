import { motion } from 'framer-motion';
import pp from '../img/img/pp.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1 },
      }}
      exit={{ y: -600, opacitiy: 0 }}
      className='header'
    >
      <div className='main-image'>
        <img src={pp} alt='' />
      </div>
      <div className='hero-text'>
        <h1>Hi, I'm Joeri, an aspiring Web Developer.</h1>
        <h2>You can discover my projects and more about me below!</h2>
      </div>
      <div className='arrow-container'></div>
      <div className='arrow-container'>
        <Link className='section-redirect' to='/main-page'>
          <button className='arrow bounce'>&#8595;</button>
          <button className='learn-button' type='button'>
            Learn More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MainPage;
