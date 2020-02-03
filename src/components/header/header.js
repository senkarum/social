import React from "react";
import style from "./header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={style.header}>
            <p className={style.logo}>LOGO</p>
            <div className={style.login}>
                {props.isAuth ? props.login :   <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}


export default Header;