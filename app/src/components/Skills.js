import React from 'react';
import ContentStyled from './contentStyled';
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';


const Skills = () => {


  return (
    <ContentStyled className='skills'>
      <div className='intro col'>
        <p className='html one'>
          {'<body>'}
        </p>
        <p className='html two'>
          {'<h1>'}
        </p>
        <h1 className='mainline about'>
          Skills &<br />
          Experience
        </h1>
        <p className='html two'>
          {'</h1>'}
        </p>
        <p className='about'>
          My expertise covers both frontend and backend (client and server sides)
        </p>
        <p className='about'>
          HTML, CSS, JS, React, Redux, NodeJS, SQL, and MongoDB are my most studied technologies. I've built small, to medium-sized applications in each of these.
        </p>
        <p className='about'>
          I've developed several toy applications and been a team member on multiple frontend projects. I've also developed my own APIs, and deep-dived into data structures and algorithms.
        </p>
        <p className='html one'>
          {'</body>'}
        </p>
      </div>
      <div className='graph col'>
        <HexGrid width={'100%'} height={'95vh'} viewBox='-35 -70 90 150'>
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0}>
              <Text className='hover-text'>HTML</Text>
            </Hexagon>
            <Hexagon q={0} r={-1} s={1}>
              <Text className='hover-text'>CSS</Text>
            </Hexagon>
            <Hexagon q={2} r={-1} s={0}>
              <Text className='hover-text'>LESS</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={2}>
              <Text className='hover-text'>SASS</Text>
            </Hexagon>
            <Hexagon q={0} r={1} s={2}>
              <Text className='hover-text'>JS</Text>
            </Hexagon>
            <Hexagon q={0} r={2} s={2}>
              <Text className='hover-text'>React</Text>
            </Hexagon>
            <Hexagon q={1} r={2} s={0}>
              <Text className='hover-text'>Redux</Text>
            </Hexagon>
            <Hexagon q={2} r={-2} s={0}>
              <Text className='hover-text'>NodeJS</Text>
            </Hexagon>
            <Hexagon q={1} r={-1} s={2}>
              <Text className='hover-text'>SQL</Text>
            </Hexagon>
            <Hexagon q={1} r={1} s={2}>
              <Text className='hover-text'>Mongoose</Text>
            </Hexagon>
            <Hexagon q={1} r={-2} s={0}>
              <Text className='hover-text'>MongoDB</Text>
            </Hexagon>
            <Hexagon q={2} r={0} s={1}>
              <Text className='hover-text'>Python</Text>
            </Hexagon>
            <Hexagon q={2} r={1} s={0}>
              <Text className='hover-text'>Django</Text>
            </Hexagon>
          </Layout>
        </HexGrid>
      </div>
    </ContentStyled>
  );
};

export default Skills;