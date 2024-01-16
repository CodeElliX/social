import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return(

      <div className={classes.posts}>
      <Post message="Hi, hov are you?"/>
      <Post message="Old or young?" />
      </div>
    
    );
}
export default MyPosts;