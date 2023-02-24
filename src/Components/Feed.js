import React, { useEffect, useState } from 'react'
import '../CSS/Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import Post from './Post';
import { PostAddSharp } from '@mui/icons-material';
import { db } from '../Firebase/Firebase';
// import firebase from 'firebase'
import { serverTimestamp } from '@firebase/firestore';




function Feed() {

  const [post, setPost] = useState([])
  const [input, setInput] = useState('')
  
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPost(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])

  const sendPost = e => {
    e.preventDefault()
    
    db.collection('posts').add({
      name: 'Isaiah Johnson',
      description: 'This is a test description',
      message: input,
      photoURL: '',
      // timestamp: firebase.firestore.fieldValue.serverTimestamp(),
      timestamp: serverTimestamp(),
    })

    setInput('')
  }


  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
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
      {post.map(({id, data: { name, description, message, photoURL }}) => (
        <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
    ))}


      {/* <Post name='Isaiah Johnson' description='This is a test description' message='This is a test message'  /> */}
    </div>
  )
}

export default Feed



