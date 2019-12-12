import React from "react";
import {
    Route,
} from "react-router-dom";
import style from "./messagesColumn.module.css";
import Message from "./message/message";


let MessagesColumn = (props) => {

   let messagesElements = props.messagesData.map((message, i) => {
       return <Route path={'/dialog/'+message.id} key={i}  render={ () => <Message message={message.message} isUser={message.isUserMessage}  /> }/>
    });
    return (

            <div className={style.messages_column}>
                { messagesElements }
            </div>

    );
}

export default MessagesColumn;