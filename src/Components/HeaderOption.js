import { Avatar } from '@mui/material';
import React from 'react'
import '../CSS/HeaderOption.css';

function HeaderOption({Icon, title, avatar}) { //THE REASON ICON IS CAPITALIZED IS BECAUSE IT IS A COMPONENT
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_Icon' />}
      {avatar && (
        <Avatar className="headerOption_Icon" src={avatar} />
      )}
      <h3 className='headerOption_Title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
