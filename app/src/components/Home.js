import React from 'react';
import ContentStyled from './contentStyled';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <ContentStyled className='home'>
      <div className='intro'>
        <p className='html one'>
          {'<body>'}
        </p>
        <p className='html two'>
          {'<h1>'}
        </p>
        <h1 className='mainline'>
          Hi,<br />
          I'm <span className='first-letter'>C</span>hris,<br />
          a web developer.
        </h1>
        <p className='html two'>
          {'</h1>'}
        </p>
        <p className='tagline'>Full Stack Developer</p>
        <button className='contact'>
          <a href='https://www.linkedin.com/in/christopher-a-york/' target='_blank' rel='noopener noreferrer' className='button'>
            Contact Me
          </a>
        </button>
        <p className='html one'>
          {'</body>'}
        </p>
      </div>
    </ContentStyled>
  );
};

export default Home;