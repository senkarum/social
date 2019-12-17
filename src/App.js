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
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialog' render={() => <Dialogs store={props.store}/>}/>
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
