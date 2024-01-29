import MyPosts from '../../Post/MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './profile.module.css';



function Profile() {
    return(
      <div>
      <ProfileInfo />
      <MyPosts />
      </div>
    );
}
export default Profile;