import classes from './MyPosts.module.css';
import Post from '../Post';

let MyPostsData = [
  {id: 1, message:"Hi, hov are you?", like: "0" },
  {id: 2, message:"Old or young?", like: "23" },
]

function MyPosts() {
    return(
      <div className={classes.postsAll}>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      <div className={classes.posts}>
        <Post message={MyPostsData[0].message} like={MyPostsData[1].like}/>
        <Post message={MyPostsData[1].message} like={MyPostsData[1].like}/>
      </div>
      </div>
    
    );
}
export default MyPosts;