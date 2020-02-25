import React from 'react';
import ContentStyled from './contentStyled';
// import {Link} from "react-router-dom";


const About = () => {


  return (
    <ContentStyled className='about'>
      <div className='intro'>
        <p className='html one'>
          {'<body>'}
        </p>
        <p className='html two'>
          {'<h1>'}
        </p>
        <h1 className='mainline about'>
          About Me
        </h1>
        <p className='html two'>
          {'</h1>'}
        </p>
        <p className='about'>
          Recently finished learning at Lambda School, started out as a hobby programmer working on a personal project for fun.
          I've been a student of the craft for roughly seven years.
        </p>
        <p className='about'>
          Organized, problem solver, critical thinker, and dedicated to my craft. In my free time I enjoy making art, talking pop culture, reading, and traveling.
          I'm located in Indianapolis, IN with my family, so either local or remote work is preferred.
        </p>
        <p className='about'>
          I'm interested in both Frontend and Backend technologies, with a focus on system design. I enjoy working with upbeat people, and those with a student mindset.
        </p>
        <p className='html one'>
          {'</body>'}
        </p>
      </div>
    </ContentStyled>
  );
};

export default About;