import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return(
<div>
<div>
 <img src='https://www.desertfun.ae/images/gallery/IMG%20World%20Park%20By%20Desertfun.ae%203.jpg'/>
</div>
        <div className={classes.descriptionBlock}>
          ava + description
        </div>
</div>
    );
}

export default ProfileInfo;