import React from "react";
import style from "./../../dialog.module.css";

class Message extends  React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`${style.message} ${this.props.isUser === true ? style.message_user : ''}`}>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Message;