import style from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

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

  let dialogesComponentData = dialogesData.map(el => <DialogItem id={el.id} name={el.name} />) 
  let messagesComponentData = messageData.map(el => <Message id={el.id} message={el.message} />) 

function Dialoges(props) {
    return(
    <div clasName={style.ollDialogs}>
            <div className={style.dialogs}>
                 {dialogesComponentData}
            </div>
            <div className={style.messages}>
            {messagesComponentData}
            </div>
    </div>
    )
}

export default Dialoges;