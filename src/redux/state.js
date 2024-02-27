
let POST_PUSH = "POST-PUSH";
let ADD_CHANGE_STATE = "ADD-CHANGE-STATE";

let UPDATE_TEXT_DIALOGES_DATA = "UPDATE_TEXT_DIALOGES_DATA";
let SEND_MESSAGE = "SEND_MESSAGE";
let store = {

   _state: {
       myPostData: 
    {
        postsData : 
        [
        {id: 1, message:"Hi, hov are you?", like: "0" },
        {id: 2, message:"Old or young?", like: "23" },
        ],
        textareData: "it-kam"
    },
            
        myMessageData : 
     {
        
        messageData : 
        [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "How are you"},
            {id: 4, message: "Thanks"},
            {id: 5, message: "Yo"}
        ],

        dialogesData : 
        [
        {id: 1, name: "Dima"},
        {id: 2, name: "Olya"},
        {id: 3, name: "Nika"},
        {id: 4, name: "Nikita"},
        {id: 5, name: "Ksenia"}
        ],

        textDialogesData: ""
      
    },

    profileInfoData: 
    [
        {ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg", description: "Jlya"},
        {ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg", description: "Jlya"}
    ]
}, 

_newRerenderHelper(){

},

getState() {
    return this._state;
},

newRerender(observer) {
 this._newRerenderHelper = observer;
},

// _postPush () {
// let newObj = {
//     id: 3,
//     message: this._state.myPostData.textareData,
//     like: "0"
// }
// this._state.myPostData.postsData.push(newObj);
// this._state.myPostData.textareData = '';
// this._newRerenderHelper(this._state)
// },

// _addChangeState(textValue) {
//   this._state.myPostData.textareData = textValue;
//   this._newRerenderHelper(this._state)
// },

// _addProfileInfoItemText(textValue) {
//    let profileObj = {
//     ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg",
//     description: textValue
//    }
//    this._state.profileInfoData.push(profileObj);
//    this._newRerenderHelper(this._state)
// },

dispatch(action) {
 if(action.type === "POST-PUSH"){
    let newObj = {
        id: 3,
        message: this._state.myPostData.textareData,
        like: "0"
    }
    this._state.myPostData.postsData.push(newObj);
    this._state.myPostData.textareData = '';
    this._newRerenderHelper(this._state)
 } else if(action.type === "ADD-CHANGE-STATE") {
    this._state.myPostData.textareData = action.textValue;
    this._newRerenderHelper(this._state)
 }else if(action.type === "ADD-PROFILE-INFO-ITEM-TEXT"){
    let profileObj = {
        ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg",
        description: action.textValue
       }
       this._state.profileInfoData.push(profileObj);
       this._newRerenderHelper(this._state)
 }else if(action.type === UPDATE_TEXT_DIALOGES_DATA) {
   this._state.myMessageData.textDialogesData = action.body;
   this._newRerenderHelper(this._state);
 }else if(action.type === SEND_MESSAGE) {
    let body = this._state.myMessageData.textDialogesData;
    this._state.myMessageData.textDialogesData = "";
    this._state.myMessageData.messageData.push({id: 6, message: body});
    this._newRerenderHelper(this._state);
  }
}

}

export const addPostActionCreator = () =>  ({type: POST_PUSH})
  

  export const addChangeActionCreator = (text) => ({type: ADD_CHANGE_STATE, textValue: text})

  export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
  export const updateTextDialogesDataActionCreator = (body) => ({type: UPDATE_TEXT_DIALOGES_DATA, body: body})
  






// window.store = store;
export default store;

