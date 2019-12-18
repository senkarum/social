import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import AddPost from "./addPost";
import StoreContext from "../../../../storeContext";


let AddPostContainer = (props) => {

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


                    return <AddPost addPost={addPost} updateNewPostText={onPostChange}
                                    newPostText={props.store.getState().profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default AddPostContainer;