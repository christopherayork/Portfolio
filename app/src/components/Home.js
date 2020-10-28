import React from 'react';
import ContentStyled from './contentStyled';


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
        <span className='email'><a href='mailto:christopherayork1992@gmail.com'>christopherayork1992@gmail.com</a></span>
        <p className='html one'>
          {'</body>'}
        </p>
      </div>
    </ContentStyled>
  );
};

export default Home;