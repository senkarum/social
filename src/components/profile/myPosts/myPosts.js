import React from "react";
import style from "./myPosts.module.css"
import Post from "./posts/post.js";
import {Field, reduxForm} from "redux-form";
let postTextarea = React.createRef();


class MyPosts extends React.Component {

    addNewPost = (postMessage) => {
        let postText = postMessage.post;
        console.log(postText);
        this.props.addPost(postText);
    };



    render() {
        let postsElements = this.props.postsData.map((post, i) => {
            return <Post messages={post.messages} likes={post.likes} key={i}/>
        });
        return (

            <div className={style.my_posts}>
                <div className={style.add_posts}>
                    <h2>My Posts</h2>
                    <AddPostFormRedux onSubmit={this.addNewPost}/>

                </div>
                <div className={style.latest_posts}>
                    { postsElements }
                </div>
            </div>
        );
    }
}


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" placeholder="your news" name="post"/>
            <button  className="btn">Send</button>
        </form>
    )
}

const  AddPostFormRedux = reduxForm({form: 'postForm'})(AddPostForm)
export default MyPosts;