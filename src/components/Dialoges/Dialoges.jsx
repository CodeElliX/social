import style from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateTextDialogesDataActionCreator} from "./../../redux/state";
import {sendMessageActionCreator} from "./../../redux/state";
import React, { createRef } from 'react';


function  Dialoges(props) {
  let  link = React.createRef();
  let state = props.store.getState().myMessageData;
let dialogesComponentData = state.dialogesData.map(el => <DialogItem id={el.id} name={el.name} />) 
  let messagesComponentData = state.messageData.map(el => <Message id={el.id} message={el.message} />) 
  let newMessageBody = state.textDialogesData;
  function onSendMessageClick() {
    props.store.dispatch(sendMessageActionCreator());
  }
  function onNewMessageChange(event) {
  let body = link.current.value;
  props.store.dispatch(updateTextDialogesDataActionCreator(body));
  }
    return(
    <div className={style.ollDialogs}>
            <div className={style.dialogs}>
                 {dialogesComponentData}
            </div>
            <div className={style.messages}>
            <div>{messagesComponentData}</div>
            <div>
              <div><textarea ref={link} placeholder='Enter you message' value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
              <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
            </div>
    </div>
    )
}

export default Dialoges;