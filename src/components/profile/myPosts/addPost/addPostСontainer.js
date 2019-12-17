import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import AddPost from "./addPost";



let AddPostContainer = (props) => {
    let addPost = (postText) => {
        if (postText.length > 0) props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(''));
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
       <AddPost addPost={addPost} updateNewPostText={onPostChange} newPostText={props.store.getState().profilePage.newPostText}/>
    );
};

export default AddPostContainer;