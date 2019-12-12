import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import './app.css';
import Header from "./components/header/header.js"
import Footer from "./components/footer/footer.js"
import Sidebar from "./components/sidebar/sidebar.js";
import Profile from "./components/profile/profile.js";
import Dialog from "./components/dialogs/dialog";
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/setting/settings";



const App = (props) => {

    return (
        <Router>
            <div className="full_page">
                <Header/>

                <div className="content_cont">
                    <Sidebar sidebarData={props.appState.sidebarData}/>
                    <Route path='/profile'  render={ () => <Profile profileState={props.appState.profilePage}/> }/>
                    <Route path='/dialog' render={ () => <Dialog dialogState={props.appState.dialogPage} messagesData={props.appState.messagesData}/> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

                <Footer/>
            </div>
        </Router>
    );
};


export default App;
