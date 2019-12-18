import React from "react";
import style from "./../dialog.module.css";
import DialogContainer from "./dialog/dialogContainer";


let DialogsColumn = (props) => {
    let dialogsElements = props.dialogsData.map((dialog, i) => {
        return  <DialogContainer  id={dialog.id} name={dialog.name} key={i}/>
    });

    return (
        <div className={style.dialogs_columns}>
            { dialogsElements }
        </div>
    );
}

export default DialogsColumn;