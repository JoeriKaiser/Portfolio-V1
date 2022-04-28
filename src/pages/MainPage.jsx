import DSC from '../img/img/DSC.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import overlay1 from '../img/img/overlay.svg';
import overlay2 from '../img/img/topography.svg';

const MainPage = () => {
  const [bodyImage, setBodyImage] = React.useState(
    ((document.body.style.backgroundImage = `url(${overlay1})`),
    (document.body.style.backgroundColor = `red`))
  );

  return (
    <header>
      <div className='main-image'>
        <img src={DSC} alt='' />
      </div>
      <div className='hero-text'>
        <h1>Hi, I'm Joeri, an aspiring Web Developer.</h1>
        <h2>You can discover my projects and more about me below!</h2>
      </div>
      <div className='arrow-container'></div>
      <div className='arrow-container'>
        <Link
          to='/about'
          onClick={() =>
            setBodyImage(
              ((document.body.style.backgroundImage = `url(${overlay2})`),
              (document.body.style.backgroundColor = `#1a3550`))
            )
          }
        >
          <button className='arrow bounce'>&#8595;</button>
        </Link>
      </div>
    </header>
  );
};

export default MainPage;
