import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {firebaseContext} from "./config/contexts.js"
import Firebase from "./config/config.js"

ReactDOM.render(
	<firebaseContext.Provider value={new Firebase()} >
	 	<App />
	 </firebaseContext.Provider>, 
	 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
