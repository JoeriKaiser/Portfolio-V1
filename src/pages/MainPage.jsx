import { motion } from 'framer-motion';
import pp from '../img/img/pp.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <motion.div className='header'>
      <motion.div
        initial={{ y: -1000, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ delay: 0, duration: 1 }}
        exit={{ y: -1000, opacity: 0 }}
        className='header-center'
      >
        <div className='main-image-container'>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
            className='main-image-circle'
          >
            <motion.div
              initial={{ rotate: 360 }}
              animate={{ rotate: 0 }}
              transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
              className='main-image'
            >
              <img src={pp} alt='' />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ ease: 'easeInOut', delay: 1 }}
          className='hero-text'
        >
          <h1>Hi, I'm Joeri, an aspiring Web Developer.</h1>
          <h2>You can discover my projects and more about me below!</h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ease: 'easeInOut', delay: 1 }}
        >
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
      </motion.div>
    </motion.div>
  );
};

export default MainPage;
