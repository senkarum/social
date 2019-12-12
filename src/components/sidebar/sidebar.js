import React from "react";
import style from "./sidebar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./friends/friends";


let Sidebar = (props) => {
    return (
        <nav className={style.sidebar}>
            <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/profile">Profile</NavLink></div>
            <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/dialog">Messages</NavLink></div>
            <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/news">News</NavLink></div>
            <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/music">Music</NavLink></div>
            <div className={style.sidebar_item}><NavLink activeClassName={style.active} to="/settings">Setting</NavLink></div>

            <Friends friendsData={props.sidebarData.friends}/>
        </nav>
    );
}


export default Sidebar;