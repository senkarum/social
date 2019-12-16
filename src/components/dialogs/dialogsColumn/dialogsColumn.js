import React from "react";
import style from "./../dialog.module.css";
import Dialog from "./dialog/dialog";


let DialogsColumn = (props) => {
    let dialogsElements = props.dialogsData.map((dialog, i) => {
        return  <Dialog  dispatch={props.dispatch} id={dialog.id} name={dialog.name} key={i}/>
    });

    return (
        <div className={style.dialogs_columns}>
            { dialogsElements }
        </div>
    );
}

export default DialogsColumn;