import React from "react";
import style from "./myPosts.module.css"
import Post from "./posts/post.js";
let postTextarea = React.createRef();




let MyPosts = (props) => {

    let postsElements = props.postsData.map((post, i) => {
        return <Post messages={post.messages} likes={post.likes} key={i}/>
    });

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
        <div className={style.my_posts}>
            <div className={style.add_posts}>
                <h2>My Posts</h2>
                <form action="">
                <textarea onChange={onPostChange} ref={postTextarea} value={props.newPostText} rows="4"
                          placeholder="your news"/>
                    <button onClick={addPostBtnClick} className="btn">Send</button>
                </form>
            </div>
            <div className={style.latest_posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;