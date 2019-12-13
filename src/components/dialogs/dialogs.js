import React from "react";
import style from "./dialog.module.css";
import DialogsColumn from "./dialogsColumn/dialogsColumn";
import MessagesColumn from "./messagesColumn/messagesColumn";
import AddMessage from "./addMessage/addMessage";



let Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <DialogsColumn dispatch={props.dispatch} dialogsData={props.dialogsState.dialogsData}/>
            <MessagesColumn messagesData={props.dialogsState.messagesData}/>
            <AddMessage dispatch={props.dispatch}/>
        </section>
    );
}

export default Dialogs;