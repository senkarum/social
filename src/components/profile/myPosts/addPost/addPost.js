import React from "react";
import style from "./addPost.module.css";

let postTextarea = React.createRef();


let addPost = (props) => {
    let addPostBtnClick = (e) => {
        e.preventDefault();
        let postText = postTextarea.current.value;
        if (postText.length > 0) props.addPostFunction(postText);
        props.updateNewPostText('')
    };

    let onPostChange = () => {
        let postText = postTextarea.current.value;
            props.updateNewPostText(postText);
    };
    return (
        <div className={style.add_posts}>
            <h2>My Posts</h2>
            <form action="">
                <textarea onChange={onPostChange} ref={postTextarea} value={props.addPostData} rows="4"
                          placeholder="your news"/>
                <button onClick={addPostBtnClick} className="btn">Send</button>
            </form>
        </div>
    );
};

export default addPost;