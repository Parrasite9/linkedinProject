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
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/Firebase';
import { logout, selectUser } from '../features/userSlice';

function Header() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

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
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header
