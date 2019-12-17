import React from "react";
import {
    addMessageActionCreator,
    updateMessageActionCreator,
} from "../../../redux/dialogReducer";
import AddMessage from "./addMessage";



let AddMessageContainer = (props) => {
    let addMessage = (text) => {
        if (text.length > 0) props.store.dispatch(addMessageActionCreator(text));
        props.store.dispatch(updateMessageActionCreator(''));
    };

    let updateMessage = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    };

    return (
        <AddMessage updateMessage={updateMessage} addMessage={addMessage} addMessageData={props.store.getState().dialogPage.newMessageText}/>

    );
};
export default AddMessageContainer;