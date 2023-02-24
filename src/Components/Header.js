import React from 'react'
import '../CSS/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


// MUI ICONS 
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
      <div className="header_Left">
        <img src='https://i.imgur.com/YdwX313.png' alt='' />
        <div className="header_Search">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>
      <div className="header_Right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      </div>
    </div>
  )
}

export default Header
