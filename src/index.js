import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//NOTLAR : 
//Proje icinde REACT-ALERT kullanimi icin options(timeout vs..) + AlertProvider ile sarmala yapildi
// React-Alert icin Kurulumlar  :
//- npm install --save react-alert
//- npm install --save react-alert react-alert-template-basic

const options = {timeout: 3000,position: positions.MIDDLE };

ReactDOM.render(    
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
  </AlertProvider>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
