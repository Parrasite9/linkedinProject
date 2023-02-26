import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import '../CSS/Sidebar.css';
import { selectUser } from '../features/userSlice';


function Sidebar() {

  const user = useSelector(selectUser)

  const recentItem = (topic) => {

    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className='sidebar'>

      {/* SIDEBAR TOP  */}
      <div className="sidebar_top">
        <img src='https://i.imgur.com/0NKqxT7.png' alt='' />
        <Avatar className='sidebar_Avatar' src={user.photoUrl}>{user.displayName[0]} </Avatar>
        <h2>{user.displayName} </h2>
        <h4>{user.email}</h4>  
      </div>

      {/* SIDEBAR STATS  */}
      <div className="sidebar_stats">
        <div className="sidbar_stat">
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>2,938</p>
        </div>
        <div className="sidbar_stat">
          <p>Views on post</p>
          <p className='sidebar_statNumber'>3,827</p>
        </div>    
      </div>

      {/* SIDEBAR BOTTOM  */}
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('HIRE_ME')}
        {recentItem('programming')}
        {recentItem('softareengineering')}
        {recentItem('design')}
        {recentItem('reactJS')}
      </div>
    </div>
  )
}

export default Sidebar
