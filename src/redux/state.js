
function newRerenderHelper() {

}

export function newRerender(observer) {
 newRerenderHelper = observer;
}


let state = {
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
        ]
      
    },

    profileInfoData: 
    [
        {ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg", description: "Jlya"},
        {ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg", description: "Jlya"}
    ]
}

///////////////////////////////////////////////////////////////////

export function postPush () {
let newObj = {
    id: 3,
    message: state.myPostData.textareData,
    like: "0"
}
state.myPostData.postsData.push(newObj);
state.myPostData.textareData = '';
newRerenderHelper(state)
}


export function addChangeState(textValue) {
  state.myPostData.textareData = textValue;
  newRerenderHelper(state)
}
////////////////////////////////////////////////////////////////////


export function addProfileInfoItemText(textValue) {
   let profileObj = {
    ava: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg",
    description: textValue
   }
   state.profileInfoData.push(profileObj);
   newRerenderHelper(state)
}






export default state;

