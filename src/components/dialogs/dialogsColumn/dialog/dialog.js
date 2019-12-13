import React from "react";
import style from "./dialog.module.css";
import {NavLink} from "react-router-dom";

let dialogNav = React.createRef();

let Dialog = (props) => {
    let switchDialog = () => {
      /*  let dialogId = dialogNav.current.getAttribute('data-id');
        props.switchDialogFunction(dialogId);*/
    };

    return (
        <div className={style.dialog_item}>
            <NavLink ref={dialogNav} onClick={switchDialog} data-id={props.id} activeClassName={style.active} to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;