import React from "react";
import style from "./../dialog.module.css";


let messageTextarea = React.createRef();


let AddMessage = (props) => {
    let addMessageBtn = (e) => {
        e.preventDefault();
        let newMessage = messageTextarea.current.value;
        props.addMessage(newMessage);
    };

    let onMessageChange = () => {
        let newMessage = messageTextarea.current.value;
        props.updateMessage(newMessage)
    };

    return (
        <div className={style.addMessage}>
            <form action="">
                <textarea onChange={onMessageChange} value={props.addMessageData} ref={messageTextarea} placeholder="Enter your message"/>
                <button onClick={addMessageBtn} className="btn">Отправить</button>
            </form>
        </div>

    );
};
export default AddMessage;