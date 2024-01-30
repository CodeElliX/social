import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
  
      
let MyPostsData = [
  {id: 1, message:"Hi, hov are you?", like: "0" },
  {id: 2, message:"Old or young?", like: "23" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogesData={dialogesData} messageData={messageData} myPostsData={MyPostsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();