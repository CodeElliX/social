import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return(
      <div className={classes.posts}>
        <p>My posts</p>
        <textarea></textarea>
        <button>Add post</button>
      <Post message="Hi, hov are you?" like="0"/>
      <Post message="Old or young?" like="23"/>
      </div>
    
    );
}
export default MyPosts;