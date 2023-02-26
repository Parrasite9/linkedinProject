import { Avatar } from '@mui/material';
import React from 'react'
import '../CSS/Post.css';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({name, description, message, photoURL}) {
  return (
    <div className='post'>
        {/* POST HEADER  */}
        <div className="post_Header">
            <Avatar src={photoURL}>{name[0]} </Avatar>
            <div className="post_Info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        

        {/* POST BODY  */}
        <div className="post_Body">
            <p>{message}</p>
        </div>


        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title='Liked' color='gray' />
            <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
            <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
            <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
        </div>
    </div>
  )
}

export default Post
