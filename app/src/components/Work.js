import React from 'react';
import ContentStyled from './contentStyled';


import stackPrev from '../assets/stack-preview.png';
import pffPrev from '../assets/project-fe-preview.png';
import ppMUDPrev from '../assets/pizza-party-preview.png';

const projects = [
  {
    image: stackPrev,
    title: 'Stack',
    description: 'Stack is a business card organizational tool used to manage and share your professional information to colleagues and customers.',
    stack: ["HTML", "CSS", "LESS"],
    github: 'https://github.com/bw-business-card-organizer/business-card-organizer-UI',
    deploy: 'https://stack-bco.netlify.com/'
  },
  {
    image: pffPrev,
    title: 'Project Firefly Frontend',
    description: 'A kid\'s learning app meant to teach programming concepts.',
    stack: ["HTML", "CSS", "SASS", "JS", "React", "Node", "MongoDB", "Express"],
    github: 'https://github.com/Lambda-School-Labs/project-firefly-fe',
    deploy: 'https://projectfirefly.netlify.com/'
  },
  {
    image: ppMUDPrev,
    title: 'Pizza Party MUD',
    description: 'A frontend react app with a python/django API built using depth-first maze generation to create a lightweight MUD',
    stack: ["HTML", "CSS", "Python", "Django", "JS", "React"],
    github: 'https://github.com/orgs/Pizza-Party-BW/dashboard',
    deploy: 'https://pizzaparty.netlify.com/'
  }
  // {
  //   image: '',
  //   title: 'Lambda Miner',
  //   description: 'A frontend react app with support from python api scripts to represent, play, and mine out cryptocurrency on the offical lambda graduation game.',
  //   github: 'https://github.com/orgs/CS24-BW-TS/dashboard',
  //   deploy: ''
  // }
];

const Work = () => {


  return (
    <ContentStyled className='work'>
      <div className='projects'>
        {projects.map(e => {
          return (
            <div className='project'>
              <div className='content'>
                <h2 className='title'>{e.title}</h2>
                <p className='description'>{e.description}</p>
                <span className='stack-title'>Tech Stack</span>
                <ul className='stack-list'>
                  {e.stack && e.stack.length ? e.stack.map(s => <li className='stack-item'>{s}</li>) : null}
                </ul>
                <div className='buttons'>
                  <a href={e.github} target='_blank' rel='noopener noreferrer'><button className='github'>GitHub</button></a>
                  <a href={e.deploy} target='_blank' rel='noopener noreferrer'><button className='deploy'>Live</button></a>
                </div>
              </div>
              <img src={e.image} alt='project' />
            </div>
          );
        })}
      </div>
    </ContentStyled>
  );
};

export default Work;