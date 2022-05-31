import { motion } from 'framer-motion';

import React from 'react';

function ProjectItem(props) {
  console.log(props);
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileFocus={{ scale: 0.95 }}
      className='project-detail-container'
    >
      <img src={props.placeholder} alt='' />
      <div className='project-description'>
        <h3>{props.name}</h3>
        <p id='description-tech'>Tech used:</p>
        <p>{props.tech}</p>
        <p id='description-list'>{props.description}</p>
        <hr className='rounded' />
        <a className='project-link' href={props.url}>
          <p className='description-link'>Link</p>
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
