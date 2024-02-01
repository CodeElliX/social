import MyPosts from './../Post/MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './profile.module.css';
import state from '../../redux/state';



function Profile(props) {
    return(
      <div>
      <ProfileInfo />
      <MyPosts state={props.state.postsData}/>
      </div>
    );
}
export default Profile;