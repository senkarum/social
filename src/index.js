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
import {Provider} from "react-redux";


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root'));


window.props = store;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
