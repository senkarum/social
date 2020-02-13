import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import Footer from './components/footer/footer.js'
import Sidebar from './components/sidebar/sidebar.js';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/setting/settings';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import DialogsContainer from './components/dialogs/dialogsСontainer';

class App extends React.Component{

    render() {
        return (
            <div className="full_page">
                <HeaderContainer/>

                <div className="content_cont">
                    <Sidebar/>
                    <Switch>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialog' render={() => <DialogsContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login'  render={() => <Login/>}/>
                        <Route exact path='/' render={() => <UsersContainer/>}/>
                    </Switch>
                </div>

                <Footer/>
            </div>
        );
    }
}



export default App;
