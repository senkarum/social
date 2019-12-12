import React from "react";
import style from "./addPost.module.css"


let addPost = () => {
    return (
        <div className={style.add_posts}>
            <h2>My Posts</h2>
            <form action="">
                <textarea id="addPostText" rows="4" placeholder="your news"></textarea>
                <button className="btn">Send</button>
            </form>
        </div>
    );
}

export default addPost;