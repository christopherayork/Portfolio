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
        <p className='tagline'>Front End / Back End Developer</p>
        <button className='contact'><Link to='/contact'>Contact Me</Link></button>
        <p className='html one'>
          {'</body>'}
        </p>
      </div>
    </ContentStyled>
  );
};

export default Home;