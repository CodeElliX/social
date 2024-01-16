import MyPosts from '../MyPosts/MyPosts';
import classes from './profile.module.css';

function Profile() {
    return(
      <div className={classes.content}>
      <div><img src='https://www.desertfun.ae/images/gallery/IMG%20World%20Park%20By%20Desertfun.ae%203.jpg'/></div>
      <MyPosts />
      </div>
    );
}
export default Profile;