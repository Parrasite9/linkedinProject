import React, { useEffect, useState } from 'react'; // import the necessary modules
import '../CSS/Feed.css'; // import the Feed component's styles
import InputOption from './InputOption'; // import InputOption component
import CreateIcon from '@mui/icons-material/Create'; // import the CreateIcon from material-ui/icons
import ImageIcon from '@mui/icons-material/Image'; // import the ImageIcon from material-ui/icons
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'; // import the SubscriptionsIcon from material-ui/icons
import EventNoteIcon from '@mui/icons-material/EventNote'; // import the EventNoteIcon from material-ui/icons
import ViewDayIcon from '@mui/icons-material/ViewDay'; // import the ViewDayIcon from material-ui/icons
import Post from './Post'; // import the Post component
import { PostAddSharp } from '@mui/icons-material'; // import the PostAddSharp icon from material-ui/icons
import { db } from '../Firebase/Firebase'; // import the Firebase instance from Firebase.js
// import firebase from 'firebase'
import { serverTimestamp } from '@firebase/firestore'; // import the serverTimestamp function from the Firestore module
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {

  const user = useSelector(selectUser)

  const [post, setPost] = useState([]); // initialize the state variable post to an empty array
  const [input, setInput] = useState(''); // initialize the state variable input to an empty string
  
  useEffect(() => { // run this effect only once when the component mounts
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => ( // listen to the 'posts' collection in the Firestore database, sort the results by timestamp in descending order, and update the state variable post with the new data whenever a change is detected
      setPost(snapshot.docs.map(doc => ( // for each document in the snapshot, create a new object with its id and data properties and store them in an array
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])

  const sendPost = e => { // define the sendPost function that will run when the "Send" button is clicked
    e.preventDefault(); // prevent the default form submission behavior
    
    db.collection('posts').add({ // add a new document to the 'posts' collection in Firestore with the following data
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL:  user.photoUrl || "",
      timestamp: serverTimestamp(),
    })

    setInput(''); // clear the input field
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
      <FlipMove>
        {post.map(({id, data: { name, description, message, photoURL }}) => (
          <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
      ))}
      </FlipMove>

    </div>
  )
}

export default Feed



