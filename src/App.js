import React from 'react';
import {Route} from "react-router-dom";
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
                    <Route path='/profile'  render={ () => <Profile addPostFunction={props.addPostFunction} updateNewPostText={props.updateNewPostText} profileState={props.appState.profilePage}/> }/>
                    <Route path='/dialog' render={ () => <Dialogs switchDialogFunction={props.switchDialogFunction} addMessageFunction={props.addMessageFunction} dialogState={props.appState.dialogPage} messagesData={props.appState.messagesData}/> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

                <Footer/>
            </div>
    );
};


export default App;
