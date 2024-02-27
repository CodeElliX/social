import MyPosts from './../Post/MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './profile.module.css';
import state from '../../redux/state';



function Profile(props) {
    return(
      <div>
      <ProfileInfo profileInfoData={props.profileInfoData} dispatch={props.dispatch}/>
      <MyPosts state={props.state.postsData} textareData={props.state.textareData} dispatch={props.dispatch}/>
      </div>
    );
}
export default Profile;