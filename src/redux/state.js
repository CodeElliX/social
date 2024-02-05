import { renderFunk } from "../render";



let state = {
       myPostData: 
    {
        postsData : 
        [
        {id: 1, message:"Hi, hov are you?", like: "0" },
        {id: 2, message:"Old or young?", like: "23" },
        ] 
    
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
        ]
      
    }
}

export function postPush (messageValue) {
let newObj = {
    id: 3,
    message: messageValue,
    like: "0"
}
state.myPostData.postsData.push(newObj);
renderFunk(state);
}

export default state;