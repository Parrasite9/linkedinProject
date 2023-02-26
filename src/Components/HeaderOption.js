import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import '../CSS/HeaderOption.css';
import { selectUser } from '../features/userSlice';

function HeaderOption({Icon, title, avatar, onClick}) { //THE REASON ICON IS CAPITALIZED IS BECAUSE IT IS A COMPONENT

  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_Icon' />}
      {avatar && (
        <Avatar className="headerOption_Icon">{user?.displayName[0]} </Avatar>
      )}
      <h3 className='headerOption_Title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
