import React from "react";
import {
    addMessageActionCreator,
    updateMessageActionCreator,
} from "../../../redux/dialogReducer";
import AddMessage from "./addMessage";
import StoreContext from "../../../storeContext";


let AddMessageContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addMessage = (text) => {
                    if (text.length > 0) store.dispatch(addMessageActionCreator(text));
                    store.dispatch(updateMessageActionCreator(''));
                };

                let updateMessage = (text) => {
                    store.dispatch(updateMessageActionCreator(text));
                };
                return <AddMessage updateMessage={updateMessage} addMessage={addMessage}
                                   addMessageData={store.getState().dialogPage.newMessageText}/>
            }}
        </StoreContext.Consumer>

    );
};
export default AddMessageContainer;