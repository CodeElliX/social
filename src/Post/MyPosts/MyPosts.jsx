import classes from './MyPosts.module.css';
import Post from '../Post';

function MyPosts() {
    return(
      <div className={classes.postsAll}>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      <div className={classes.posts}>
        <Post message="Hi, hov are you?" like="0"/>
        <Post message="Old or young?" like="23"/>
      </div>
      </div>
    
    );
}
export default MyPosts;