import React from 'react';
import SidebarStyled from "./sidebarStyled";
import { Home, Person, Build, Visibility, LinkedIn } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';


export const Sidebar = () => {

  return (
    <SidebarStyled className='sidebar'>
      <div className='top'>

      </div>
      <div className='middle'>
        <Link to='/' className='button'>
            <Home color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/about' className='button'>
            <Person color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/work' className='button'>
            <Visibility color='primary' className='icon' fontSize='large' />
        </Link>
        <Link to='/skills' className='button'>
            <Build color='primary' className='icon' fontSize='large' />
        </Link>
      </div>
      <div className='bottom'>
        <a href='https://www.linkedin.com/in/christopher-a-york/' target='_blank' rel='noopener noreferrer' className='button'>
          <LinkedIn color='primary'  className='icon social' />
        </a>
          <a href='https://github.com/christopherayork' target='_blank' rel='noopener noreferrer' className='button'>
              <GitHubIcon color='primary' className='icon github' />
          </a>

      </div>
    </SidebarStyled>
  );
};

export default Sidebar;