import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore.js";
import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext, {Provider} from "./storeContext";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>, document.getElementById('root')) ;

};






rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
