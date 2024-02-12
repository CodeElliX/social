import React from 'react';
import OnePost from './OnePost/OnePost';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
  let link = React.createRef();
  function profileFunc() {
      let text = link.current.value;
      props.addProfileInfoItemText(text);
  }

  let ProfileInfoItem = props.profileInfoData.map((el) => {
    return <OnePost ava={el.ava} description={el.description}/>
  });
  console.log(ProfileInfoItem);
    return(
<div>
<div>
 <img src='https://www.desertfun.ae/images/gallery/IMG%20World%20Park%20By%20Desertfun.ae%203.jpg'/>
</div>
    {ProfileInfoItem} 
    <div><textarea ref={link}></textarea></div>
    <div><button onClick={profileFunc}>Button</button></div>
</div>
    );
}

export default ProfileInfo;