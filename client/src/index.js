import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from "./service-workerRegistration";
// import registerServiceWorker from 'react-service-worker';
import './index.css';
import App from './App';
const appSW = registerServiceWorker()
ReactDOM.render(
  <BrowserRouter>
    <App appServiceWorker={appSW}/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
