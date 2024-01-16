import classes from './profile.module.css';

function Profile() {
    return(
      <div className={classes.content}>
      <div><img src='https://www.desertfun.ae/images/gallery/IMG%20World%20Park%20By%20Desertfun.ae%203.jpg'/></div>
      <div><img src='https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY'/></div>
    <div>
      My post
      <div className={classes.posts}>New post</div>
      <div className={classes.item}>post1</div>
      <div className={classes.item}>post2</div>
      </div> 
      </div>
    );
}
export default Profile;