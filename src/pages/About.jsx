import React from 'react';
import DevIcons from '../components/DevIcons/DevIcons';
import Nav from '../components/Nav/Nav';

function About() {
  const [iconList, setIconList] = React.useState([
    {
      name: 'Javascript',
      className: 'devicon-javascript-plain',
    },
    {
      name: 'TypeScript',
      className: 'devicon-typescript-plain',
    },
    {
      name: 'CSS',
      className: 'devicon-css3-plain-wordmark',
    },
    {
      name: 'React',
      className: 'devicon-react-original-wordmark',
    },
    {
      name: 'VueJS',
      className: 'devicon-vuejs-plain-wordmark',
    },
    {
      name: 'NodeJS',
      className: 'devicon-nodejs-plain-wordmark',
    },

    {
      name: 'MongoDB',
      className: 'devicon-mongodb-plain-wordmark',
    },
    {
      name: 'MySQL',
      className: 'devicon-mysql-plain-wordmark',
    },
    {
      name: 'Firebase',
      className: 'devicon-firebase-plain-wordmark',
    },
    {
      name: 'GraphQL',
      className: 'devicon-graphql-plain-wordmark',
    },
    {
      name: 'Next.js',
      className: 'devicon-nextjs-original-wordmark',
    },
    {
      name: 'Git',
      className: 'devicon-git-plain-wordmark',
    },
  ]);

  return (
    <div>
      <Nav />
      <div className='about-container'>
        <h1>My name is Joeri</h1>
        <p>
          I am an aspiring full-stack web developer currently in a React
          bootcamp with the will to be the best I can be with my current
          experience and my great attention to details.
        </p>
        <p>
          My goal is to find a challenge in order to improve more in this field
          that I am passionate about.
        </p>
        <p>My favortie technologies are :</p>
        <div className='icon-container'>
          {iconList.map((item, index) => (
            <DevIcons key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
