import React from "react";
import style from "./myPosts.module.css"
import Post from "./posts/post.js";
import AddPost from "./addPost/addPost";





let MyPosts = (props) => {
    console.log(props);
    let postsElements = props.postsData.map((post, i) => {
        return <Post messages={post.messages} likes={post.likes} key={i}/>
    });

    return (
        <div className={style.my_posts}>
            <AddPost/>
            <div className={style.latest_posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;