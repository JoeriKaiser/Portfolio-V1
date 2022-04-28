import Nav from '../components/Nav/Nav';
import React from 'react';
import ProjectItem from '../components/ProjectItem/ProjectItem';

function Projects() {
  const [projectList, setProjectList] = React.useState([
    {
      name: 'Missive Immersive',
      url: 'https://lea-stauder.art/',
      placeholder: 'img',
      className: 'missive-immersive',
    },
    {
      name: 'Missive Immersive',
      url: 'https://lea-stauder.art/',
      placeholder: 'img',
      className: 'missive-immersive',
    },
    {
      name: 'Missive Immersive',
      url: 'https://lea-stauder.art/',
      placeholder: 'img',
      className: 'missive-immersive',
    },
  ]);
  return (
    <div>
      <Nav></Nav>
      <div className='projects-container'>
        {projectList.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
