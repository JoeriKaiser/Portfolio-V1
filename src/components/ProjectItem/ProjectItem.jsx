import React from 'react';
import './ProjectItem.css';

function ProjectItem(props) {
  return (
    <div className='project'>
      <div className={(props.className, 'project-heading')}></div>
      <div className='project-listing'>
        <p>{props.name}</p>
        <a href={props.url}>Link</a>
      </div>
    </div>
  );
}

export default ProjectItem;
