import React from "react";
import style from "./sidebar.module.css";
import {NavLink} from "react-router-dom";
import FriendsContainer from "./friends/friendsСontainer";


class Sidebar extends React.Component {

    render() {
        return (
            <nav className={style.sidebar}>
                <div className={style.sidebar_item}><NavLink activeClassName={style.active} exact to="/">Profile</NavLink></div>
                <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/dialog">Messages</NavLink></div>
                <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/news">News</NavLink></div>
                <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/music">Music</NavLink></div>
                <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/settings">Setting</NavLink></div>
                <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/users">Users</NavLink></div>
                <FriendsContainer/>
            </nav>
        );
    }

}




export default Sidebar;