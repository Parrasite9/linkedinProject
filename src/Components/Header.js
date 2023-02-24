import React from 'react'
import '../CSS/Header.css';

// MUI ICONS 
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      THIS IS HEADER
      <div className="headerLeft">
        <img />
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
