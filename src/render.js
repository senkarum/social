import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessageFunction, addPostFunction, switchDialogFunction, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {

        ReactDOM.render(
            <Router>
            <App appState={state} switchDialogFunction={switchDialogFunction} addMessageFunction={addMessageFunction} addPostFunction={addPostFunction} updateNewPostText={updateNewPostText}/>
            </Router>, document.getElementById('root')) ;

};



