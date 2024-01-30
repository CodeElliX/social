import style from "./../Dialoges.module.css";
import { NavLink } from 'react-router-dom';


function DialogItem(props) {
let pathWay = "/dialogs/" + props.id;
    return(
 <div>
    <NavLink to={pathWay}>{props.name}</NavLink>
 </div>
);
}


export default DialogItem;