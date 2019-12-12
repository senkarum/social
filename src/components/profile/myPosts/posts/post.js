import React from "react";
import style from "./post.module.css"


let Post = (props) => {
    return (
        <div className={style.post}>
            <img
                src="https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc"
                alt="" className={style.avatar}/>
            <div className={style.text}>
                {props.messages}
            </div>
            <div className={style.like_count}>
                нравится: <span>{props.likes}</span>
            </div>
        </div>
    );
}

export default Post;