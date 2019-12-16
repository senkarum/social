import React from "react";
import style from "./../../dialog.module.css";
import {NavLink} from "react-router-dom";
import {switchDialogActionCreator} from "../../../../redux/dialogReducer";


let Dialog = (props) => {

    let switchDialog = (e) => {
        props.dispatch(switchDialogActionCreator(e.target.getAttribute('data-id')));
    };


    return (
        <div className={style.dialog_item}>
            <NavLink onClick={switchDialog} data-id={props.id} activeClassName={style.active}
                     to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;