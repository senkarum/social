import React from "react";
import style from "./myPosts.module.css"
import Post from "./posts/post.js";
import AddPostContainer from "./addPost/addPostСontainer";





let MyPosts = (props) => {
    let postsElements = props.store.getState().profilePage.postsData.map((post, i) => {
        return <Post messages={post.messages} likes={post.likes} key={i}/>
    });

    return (
        <div className={style.my_posts}>
            <AddPostContainer store={props.store} />
            <div className={style.latest_posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;