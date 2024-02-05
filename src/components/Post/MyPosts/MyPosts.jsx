import classes from './MyPosts.module.css';
import Post from './../Post';
import React, { createRef } from 'react';


function MyPosts(props) {
  let  link = React.createRef();
  let addPost = () => {
    let text = link.current.value;
    props.postPush(text);
  };

  let postMap = props.state.map((el) => {
    return <Post message={el.message} like={el.like}/>
  })
    return(
      <div className={classes.postsAll}>
        <h3>My posts</h3>
        <div><textarea ref={link}></textarea></div>
        <div><button onClick={addPost}>Add post</button></div>
      <div className={classes.posts}>
        {postMap}
      </div>
      </div>
    
    );
}
export default MyPosts;