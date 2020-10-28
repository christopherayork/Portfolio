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
        deploy: 'https://stack-bco.netlify.com/',
        bullets: ["Created animations and transitions for website navigation",
            "Mapped the scroll wheel to a slide presentation format",
            "Worked with one team mate to design a clean and professional appearance for the brand"
        ]
    },
    {
        image: pffPrev,
        title: 'Project Firefly Frontend',
        description: 'A kid\'s learning app meant to teach programming concepts.',
        stack: ["HTML", "CSS", "SASS", "JS", "React", "Node", "MongoDB", "Express"],
        github: 'https://github.com/Lambda-School-Labs/project-firefly-fe',
        deploy: 'https://projectfirefly.netlify.com/',
        bullets: ["Collaborated with 7 other full stack developers on a three phase project",
            "Completed Stripe payment system",
            "Built a responsive and streamlined marketing site",
            "Implemented a tagging system for forum posts"
        ]
    },
    {
        image: ppMUDPrev,
        title: 'Pizza Party MUD',
        description: 'A frontend react app with a python/django API built using depth-first maze generation to create a lightweight MUD',
        stack: ["HTML", "CSS", "Python", "Django", "JS", "React"],
        github: 'https://github.com/orgs/Pizza-Party-BW/dashboard',
        deploy: 'https://pizzaparty.netlify.com/',
        bullets: ["Collaborated remotely with 3 other full stack developers to build this application within 1 week",
            "Solely responsible for writing the map generation portion for the backend",
            "Generated hundreds of mazes successfully in testing and deployment"
        ]
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
                            <img src={e.image} alt='project'/>
                            <div className='content'>
                                <div className='text'>
                                    <h2 className='title'>{e.title}</h2>
                                    <p className='description'>{e.description}</p>

                                    <span className='stack-list'>
                      Tech Stack - {e.stack && e.stack.length ? e.stack.map((s, i, a) => i === a.length - 1 ? s : s + " | ") : null}
                    </span>
                                    <ul className='bullet-list'>
                                        {e.bullets && e.bullets.length ? e.bullets.map(b => <li
                                            className='bullet-item'>{b}</li>) : null}
                                    </ul>
                                    <div className='buttons'>
                                        <a href={e.github} target='_blank' rel='noopener noreferrer'>
                                            <button className='github'>GitHub</button>
                                        </a>
                                        <a href={e.deploy} target='_blank' rel='noopener noreferrer'>
                                            <button className='deploy'>Live</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ContentStyled>
    );
};

export default Work;