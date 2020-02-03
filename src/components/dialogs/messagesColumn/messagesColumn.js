import React from "react";
import {
    Route,
} from "react-router-dom";
import style from "./../dialog.module.css";
import Message from "./message/message";

class MessagesColumn extends React.Component {

    render() {

        let messagesElements = this.props.messagesData.map((message, i) => {
            return <Route path={'/dialog/'+message.id} key={i}  render={ () => <Message message={message.message} isUser={message.isUserMessage}  /> }/>
        });
        return (
            <div   className={style.messages_column}>
                <div className={style.overflow_container}>
                    { messagesElements }
                </div>
            </div>
        );
    }
}

export default MessagesColumn;