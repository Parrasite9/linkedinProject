import React from 'react'
import '../CSS/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


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
            <input type="text" placeholder='search' />
        </div>
      </div>
      <div className="header_Right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar="https://i.imgur.com/pzhXqfp.png" title="Me" />
      </div>
    </div>
  )
}

export default Header
