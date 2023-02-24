import React from 'react'
import '../CSS/Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';


function Feed() {
  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="View" color="E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={ViewDayIcon} title="Write Article" color="#7FC15E" />
        </div>
      </div>



      {/* POSTS  */}

      .
    </div>
  )
}

export default Feed
