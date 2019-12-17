import React from 'react';
import {Route, Switch} from "react-router-dom";
import './app.css';
import Header from "./components/header/header.js"
import Footer from "./components/footer/footer.js"
import Sidebar from "./components/sidebar/sidebar.js";
import Profile from "./components/profile/profile.js";
import Dialogs from "./components/dialogs/dialogs";
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/setting/settings";


const App = (props) => {
    return (
        <div className="full_page">
            <Header/>

            <div className="content_cont">
                <Sidebar sidebarData={props.appState.sidebarData}/>
                <Switch>
                    <Route path='/profile' render={() => <Profile dispatch={props.dispatch} profileState={props.appState.profilePage}/>}/>
                    <Route path='/dialog' render={() => <Dialogs dispatch={props.dispatch}  dialogsState={props.appState.dialogPage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </Switch>
            </div>

            <Footer/>
        </div>
    );
};


export default App;
