import React from "react";
import style from "./myPosts.module.css"
import Post from "./posts/post.js";
let postTextarea = React.createRef();


class MyPosts extends React.Component {

    addPostBtnClick = (e) => {
        e.preventDefault();
        let postText = postTextarea.current.value;
        this.props.addPost(postText);
    };

    onPostChange = () => {
        let postText = postTextarea.current.value;
        this.props.updateNewPostText(postText)
    };

    render() {
        let postsElements = this.props.postsData.map((post, i) => {
            return <Post messages={post.messages} likes={post.likes} key={i}/>
        });
        return (

            <div className={style.my_posts}>
                <div className={style.add_posts}>
                    <h2>My Posts</h2>
                <textarea onChange={this.onPostChange} ref={postTextarea} value={this.props.newPostText} rows="4"
                          placeholder="your news"/>
                        <button onClick={this.addPostBtnClick} className="btn">Send</button>
                </div>
                <div className={style.latest_posts}>
                    { postsElements }
                </div>
            </div>
        );
    }
}


export default MyPosts;