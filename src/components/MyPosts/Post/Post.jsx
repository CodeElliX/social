import Like from './Like';
import classes from './Post.module.css';

function Post(props) {
    return(
      <div className={classes.item}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/hb_avatar_frontiersofpandora_mobile_2059_b4205bda.jpeg?region=0,0,1024,768&width=960" />
        {props.message}
        <Like />
      </div>
    );
}
export default Post;