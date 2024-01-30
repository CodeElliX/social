import style from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialoges(props) {
let dialogesComponentData = props.dialogesData.map(el => <DialogItem id={el.id} name={el.name} />) 
  let messagesComponentData = props.messageData.map(el => <Message id={el.id} message={el.message} />) 
    return(
    <div className={style.ollDialogs}>
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