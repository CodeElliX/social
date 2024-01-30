import MyPosts from '../../Post/MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './profile.module.css';



function Profile(props) {
    return(
      <div>
      <ProfileInfo />
      <MyPosts myPostsData={props.myPostsData}/>
      </div>
    );
}
export default Profile;