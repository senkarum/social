import React from "react";
import MyPosts from "./myPosts";
import StoreContext from "../../../storeContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";





let MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let addPost = (postText) => {
                        if (postText.length > 0) store.dispatch(addPostActionCreator());
                        store.dispatch(updateNewPostTextActionCreator(''));
                    };

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    };

                    return <MyPosts postsData={store.getState().profilePage.postsData} addPost={addPost} updateNewPostText={onPostChange}  newPostText={store.getState().profilePage.newPostText}/>

                }
            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;