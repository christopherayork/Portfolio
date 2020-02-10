import React from 'react';
import sidebarStyled from "./sidebarStyled";
import { Home, Person, Build, Visibility, Email, LinkedIn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const Sidebar = (props) => {



  return (
    <sidebarStyled className='sidebar'>
      <div className='top'>

      </div>
      <div className='middle'>
        <Link to='/' className='button'>
          <Home color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/about' className='button'>
          <Person color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/skills' className='button'>
          <Build color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/work' className='button'>
          <Visibility color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/contact' className='button'>
          <Email color='primary' className='icon' fontSize='large' />
        </Link>
      </div>
      <div className='bottom'>
        <a href='https://www.linkedin.com/in/christopher-a-york/' target='_blank' rel='noopener' className='button small'>
          <LinkedIn color='primary' />
        </a>

      </div>
    </sidebarStyled>
  );
};

export default Sidebar;