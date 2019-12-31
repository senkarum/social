import React from "react";
import style from "./../dialog.module.css";



let messageTextarea = React.createRef();

class AddMessage extends  React.Component{

    addMessageBtn = (e) => {
        e.preventDefault();
        let newMessage = messageTextarea.current.value;
        this.props.addMessage(newMessage);
    };

    onMessageChange = () => {
        let newMessage = messageTextarea.current.value;
        this.props.updateMessage(newMessage)
    };

    render() {
        return (
            <div className={style.addMessage}>
                <form action="">
                    <textarea onChange={this.onMessageChange} value={this.props.addMessageData} ref={messageTextarea} placeholder="Enter your message"/>
                    <button onClick={this.addMessageBtn} className="btn">Отправить</button>
                </form>
            </div>

        );
    }
}

export default AddMessage;