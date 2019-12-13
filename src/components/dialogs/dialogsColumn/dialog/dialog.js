import React from "react";
import style from "./../../dialog.module.css";
import {NavLink} from "react-router-dom";



let Dialog = (props) => {


    return (
        <div className={style.dialog_item}>
            <NavLink  data-id={props.id} activeClassName={style.active} to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;