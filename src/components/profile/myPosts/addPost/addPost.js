import React from "react";
import style from "./../myPosts.module.css";

let postTextarea = React.createRef();


let AddPost = (props) => {
    let addPostBtnClick = (e) => {
        e.preventDefault();
        let postText = postTextarea.current.value;
        props.addPost(postText)
    };

    let onPostChange = () => {
        let postText = postTextarea.current.value;
        props.updateNewPostText(postText)
    };
    return (
        <div className={style.add_posts}>
            <h2>My Posts</h2>
            <form action="">
                <textarea onChange={onPostChange} ref={postTextarea} value={props.newPostText} rows="4"
                          placeholder="your news"/>
                <button onClick={addPostBtnClick} className="btn">Send</button>
            </form>
        </div>
    );
};

export default AddPost;