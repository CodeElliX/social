import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

export function renderFunk(state) {
root.render(
  <React.StrictMode>
    <App state={state} 
    postPush={store.postPush.bind(store)} 
    addChangeState={store.addChangeState.bind(store)} 
    addProfileInfoItemText={store.addProfileInfoItemText.bind(store)} />
  </React.StrictMode>
);
}

renderFunk(store.getState());

store.newRerender(renderFunk);

reportWebVitals();