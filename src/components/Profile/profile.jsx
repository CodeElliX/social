import MyPosts from './../Post/MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './profile.module.css';
import state from '../../redux/state';



function Profile(props) {
  debugger;
    return(
      <div>
      <ProfileInfo profileInfoData={props.profileInfoData} addProfileInfoItemText={props.addProfileInfoItemText}/>
      <MyPosts state={props.state.postsData} textareData={props.state.textareData} addChangeState={props.addChangeState} postPush={props.postPush}/>
      </div>
    );
}
export default Profile;