import { Avatar } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>

      {/* SIDEBAR TOP  */}
      <div className="sidebar_top">
        <img src='' alt='' />
        <Avatar className='sidebar_Avatar' src='https://i.imgur.com/pzhXqfp.png' />
        <h2>Isaiah Johnson</h2>
        <h4>johnsonisaiah13@yahoo.com</h4>  
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
      </div>
    </div>
  )
}

export default Sidebar
