import React from "react";
import style from "./dialog.module.css";
import DialogsColumn from "./dialogsColumn/dialogsColumn";
import MessagesColumn from "./messagesColumn/messagesColumn";



let Dialog = (props) => {
    return (
        <section className={style.dialogs}>
            <DialogsColumn dialogsData={props.dialogState.dialogsData}/>
            <MessagesColumn messagesData={props.dialogState.messagesData}/>
        </section>
    );
}

export default Dialog;