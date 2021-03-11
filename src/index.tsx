import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/scss/style.scss'
import store from "./redux/store";
import {Provider} from 'react-redux'
// import firebase from "firebase";



// firebase.initializeApp(config);

// Get a reference to the database service
// var database = firebase.database();
// // var admin = require('firebase-admin');
// let userRef = database.ref('pizzas/')
//
// userRef.once('value', ((snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         console.log(childSnapshot.val().category)
//
//     });
// }));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
