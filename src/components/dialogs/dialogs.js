import React from "react";
import style from "./dialog.module.css";
import AddMessageContainer from "./addMessage/addMessageContainer";
import DialogsColumnContainer from "./dialogsColumn/dialogsColumnСontainer";
import MessagesColumnContainer from "./messagesColumn/messagesColumnContainer";



let Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <DialogsColumnContainer/>
            <MessagesColumnContainer/>
            <AddMessageContainer/>
        </section>
    );
};

export default Dialogs;