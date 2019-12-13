import React from "react";
import style from "./../../dialog.module.css";

let Message = (props) => {
    return (
        <div className={`${style.message} ${props.isUser === true ? style.message_user : ''}`}>
            <p>{props.message}</p>
        </div>
    );
};

export default Message;