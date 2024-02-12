import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { postPush } from './redux/state';
import { addChangeState } from './redux/state';
import {addProfileInfoItemText} from './redux/state';
import { newRerender } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export function renderFunk(state) {
root.render(
  <React.StrictMode>
    <App state={state} postPush={postPush} addChangeState={addChangeState} addProfileInfoItemText={addProfileInfoItemText}/>
  </React.StrictMode>
);
}

renderFunk(state);

newRerender(renderFunk);

reportWebVitals();