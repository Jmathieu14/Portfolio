import 'jquery';
import React from 'react';
import { hydrate, render } from 'react-dom';
import './assets/css/overhaul.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const rootJSX =
  <React.StrictMode>
    <App />
    <span id="MODAL_RENDER_TARGET"></span>
  </React.StrictMode>;

if (root.hasChildNodes()) {
  hydrate(rootJSX, root);
} else {
  render(rootJSX, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
