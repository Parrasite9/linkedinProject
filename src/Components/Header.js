import React from 'react'
import '../CSS/Header.css';

// MUI ICONS 
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <div className="headerLeft">
        <img src='https://i.imgur.com/YdwX313.png' alt='' />
        <div className="headerSearch">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>
      <div className="headerRight">

      </div>
    </div>
  )
}

export default Header
