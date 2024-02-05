import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { postPush } from './redux/state';

export function renderFunk(state) {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} postPush={postPush} />
  </React.StrictMode>
);
}

