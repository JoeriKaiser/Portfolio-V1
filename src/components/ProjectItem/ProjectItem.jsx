import React from 'react';

function ProjectItem(props) {
  return (
    <div className='project'>
      <div className={`project-heading ${props.className}`}></div>
      <div className='project-listing'>
        <p>{props.name}</p>
        <a href={props.url}>Link</a>
      </div>
    </div>
  );
}

export default ProjectItem;
