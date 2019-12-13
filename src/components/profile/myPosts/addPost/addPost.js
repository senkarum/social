import React from "react";
import style from "./../myPosts.module.css";

let postTextarea = React.createRef();


let addPost = (props) => {
    let addPostBtnClick = (e) => {
        e.preventDefault();
        let postText = postTextarea.current.value;
        if (postText.length > 0) props.dispatch({type: 'ADD-POST'});
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
    };

    let onPostChange = () => {

        console.log(1);
        let postText = postTextarea.current.value;
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: postText})
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