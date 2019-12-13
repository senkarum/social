import React from "react";
import style from "./../dialog.module.css";


let messageTextarea = React.createRef();


let AddMessage = (props) => {

    let addMessageBtn = (e) => {
        e.preventDefault();
        let newMessage = messageTextarea.current.value;
        if (newMessage.length > 0) props.dispatch({type:'ADD-MESSAGE-FUNCTION', message: newMessage});
        messageTextarea.current.value = '';
    };


    return (
        <div className={style.addMessage}>
            <form action="">
                <textarea ref={messageTextarea} placeholder="Enter your message" name="newMessage" id="newMessage"/>
                <button onClick={addMessageBtn} className="btn">Отправить</button>
            </form>
        </div>

    );
};
export default AddMessage;