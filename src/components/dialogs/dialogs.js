import React from "react";
import style from "./dialog.module.css";
import DialogsColumn from "./dialogsColumn/dialogsColumn";
import MessagesColumn from "./messagesColumn/messagesColumn";
import AddMessageContainer from "./addMessage/addMessageContainer";



let Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <DialogsColumn store={props.store}/>
            <MessagesColumn messagesData={props.store.getState().dialogPage.messagesData}/>
            <AddMessageContainer store={props.store}/>
        </section>
    );
}

export default Dialogs;