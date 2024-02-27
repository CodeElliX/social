import style from "./../ProfileInfo.module.css";

function OnePost(props) {
    return(
        <div className={style.descriptionBlock}>
        <div className={style.image}><img src={props.ava} alt="" /></div>
        <div>description: {props.description}</div>
      </div>

    )
}

export default OnePost;