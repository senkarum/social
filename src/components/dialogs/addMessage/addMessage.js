import React from "react";
import style from "./../dialog.module.css";
import {
    addMessageActionCreator,
    updateMessageActionCreator,
} from "../../../redux/dialogReducer";


let messageTextarea = React.createRef();


let AddMessage = (props) => {
    let addMessageBtn = (e) => {
        e.preventDefault();
        let newMessage = messageTextarea.current.value;
        if (newMessage.length > 0) props.dispatch(addMessageActionCreator(newMessage));
        props.dispatch(updateMessageActionCreator(''));
    };

    let onMessageChange = () => {
        let newMessage = messageTextarea.current.value;
        props.dispatch(updateMessageActionCreator(newMessage));
    };

    return (
        <div className={style.addMessage}>
            <form action="">
                <textarea onChange={onMessageChange} value={props.addMessageData} ref={messageTextarea} placeholder="Enter your message" name="newMessage" id="newMessage"/>
                <button onClick={addMessageBtn} className="btn">Отправить</button>
            </form>
        </div>

    );
};
export default AddMessage;