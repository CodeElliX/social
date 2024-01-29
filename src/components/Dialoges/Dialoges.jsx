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
let dialogesData = [
{id: 1, name: "Dima"},
{id: 2, name: "Olya"},
{id: 3, name: "Nika"},
{id: 4, name: "Nikita"},
{id: 5, name: "Ksenia"}
];

let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "How are you"},
    {id: 4, message: "Thanks"},
    {id: 5, message: "Yo"}
    ];

function Dialoges(props) {
    return(
        <div className={style.ollDialogs}>
            <div className={style.dialogs}>
                <DialogItem id={dialogesData[0].id} name={dialogesData[0].name} />
                <DialogItem id={dialogesData[1].id} name={dialogesData[1].name} />
                <DialogItem id={dialogesData[2].id} name={dialogesData[2].name} />
                <DialogItem id={dialogesData[3].id} name={dialogesData[3].name} />
                <DialogItem id={dialogesData[4].id} name={dialogesData[4].name} />
            </div>
            <div className={style.messages}>
                <Message id={messageData[0].id} message={messageData[0].message} />
                <Message id={messageData[1].id} message={messageData[1].message} />
                <Message id={messageData[2].id} message={messageData[2].message} />
                <Message id={messageData[3].id} message={messageData[3].message} />
                <Message id={messageData[4].id} message={messageData[4].message} />
        </div>
    </div>
    )
}

export default Dialoges;