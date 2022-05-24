import Nav from '../components/Nav/Nav';
import React from 'react';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import happywastes from '../img/thumbnails/happwastes.png';

function Projects() {
  const [projectList, setProjectList] = React.useState([
    {
      name: 'Happy Wastes',
      url: 'https://p3-2109-happywastes-front.toulouse-1.wilders.dev/',
      placeholder: { happywastes },
      className: 'happy-wastes',
    },
    {
      name: 'Missive Immersive',
      url: 'https://lea-stauder.art/',
      placeholder: 'img',
      className: 'missive-immersive',
    },
    {
      name: `Chou'pets`,
      url: 'localhost:3000',
      placeholder: 'img',
      className: 'choupets',
    },
    {
      name: 'This Portfolio',
      url: 'localhost:3000',
      placeholder: 'img',
      className: 'portfolio',
    },
  ]);
  return (
    <div>
      <div className='projects-container'>
        {projectList.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
