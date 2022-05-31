import React from 'react';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import hp from '../img/thumbnails/happwastes.png';
import mi from '../img/thumbnails/missivescaled.png';
import em from '../img/thumbnails/emerga.png';
import cp from '../img/thumbnails/choupets.png';
import pf from '../img/thumbnails/jk.png';
import variants from '../context/main-variants';
import { motion } from 'framer-motion';

function Projects() {
  const projectList = [
    {
      name: 'Happy Wastes',
      url: 'https://p3-2109-happywastes-front.toulouse-1.wilders.dev/',
      placeholder: hp,
      className: 'happy-wastes',
      tech: 'React - Javascript - Node - SQL',
      description: (
        <ul>
          <li>Team Project web-app on the subject of recycling.</li>
          <li>
            A user is able to create an account, modify its aspects with a
            customizable avatar.
          </li>
          <li>
            The user can find recycling centers in proximity on a leaflet map,
            add them to a favourite list, validate recycling and attribute
            rewards to the user.
          </li>
        </ul>
      ),
    },
    {
      name: 'Missive Immersive',
      url: 'https://lea-stauder.art/',
      placeholder: mi,
      className: 'missive-immersive',
      tech: 'PHP - Wordpress',
      description: (
        <ul>
          <li>Art Protfolio.</li>
          <li>
            Users are able to navigate to various pages showing content and
            image carousels.
          </li>
          <li>Users are able to send contact mails from the contact page.</li>
        </ul>
      ),
    },
    {
      name: 'EmerGa Urgence (À venir) ',
      url: '',
      placeholder: em,
      className: 'emerga',
      tech: 'React - Javascript - Node - SQL ',
      description: (
        <ul>
          <li>Emergency response web-app</li>
          <li>
            Questions are asked to determine the source and severity of the
            incident
          </li>
          <li>
            A call suggestion will be made based on answers provided by the
            user.
          </li>
          <li>
            Immediate rescue gestures are shown to the users via illustrations
          </li>
          <li>
            All data will be transferred to the concerned emergency service for
            a faster response
          </li>
        </ul>
      ),
    },
    {
      name: `Chou'pets`,
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:6931197252598157312/',
      placeholder: cp,
      className: 'choupets',
      tech: 'React - Javascript - Python - Node - SQL ',
      description: (
        <ul>
          <li>Animal food an health tracker</li>
          <li>
            A connected device measures in intervals the distance between the
            top and bottom of the bowl.
          </li>
          <li>
            Distance is translated to percentages, which are in turn displayed
            as a graph on the home screen.
          </li>
          <li>
            Future versions will have an option to register multiple animals
          </li>
        </ul>
      ),
    },
    {
      name: 'This Portfolio',
      url: 'https://www.joerikaiser.dev/',
      placeholder: pf,
      className: 'portfolio',
      tech: 'React - Javascript ',
    },
  ];
  return (
    <motion.div
      variants={variants}
      initial='enter'
      animate='center'
      transition={{ delay: 0.1 }}
    >
      <div className='projects-container'>
        {projectList.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
