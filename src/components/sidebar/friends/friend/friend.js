import React from "react";
import style from "./../../sidebar.module.css";


let Friend = (props) => {
    return (
        <div className={style.friend}>
            <img src={props.avatar} alt=""/>
            <p>{props.name}</p>
        </div>
    );
}


export default Friend;