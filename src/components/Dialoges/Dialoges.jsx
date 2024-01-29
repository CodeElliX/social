import style from './Dialoges.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
let pathWay = "/dialogs/" + props.id;
    return(
 <div>
    <NavLink to={pathWay}>{props.name}</NavLink>
 </div>
);
}

function Message(props) {
return(
    <div className={style.message}>
        {props.message}
    </div>
)
}

function Dialoges(props) {
    return(
        <div className={style.ollDialogs}>
            <div className={style.dialogs}>
                <DialogItem id="1" name="Dima" />
                <DialogItem id="2" name="Olya" />
                <DialogItem id="3" name="Nika" />
                <DialogItem id="4" name="Nikita" />
                <DialogItem id="5" name="Ksenia" />
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="Thanks" />
                <Message message="Yo" />
        </div>
    </div>
    )
}

export default Dialoges;