import classes from './MyPosts.module.css';
import Post from './../Post';


function MyPosts(props) {
  let postMap = props.state.map((el) => {
    return <Post message={el.message} like={el.like}/>
  })
    return(
      <div className={classes.postsAll}>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      <div className={classes.posts}>
        {postMap}
      </div>
      </div>
    
    );
}
export default MyPosts;