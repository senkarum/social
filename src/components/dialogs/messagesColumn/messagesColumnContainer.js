import React from "react";
import MessagesColumn from "./messagesColumn";
import StoreContext from "../../../storeContext";


let MessagesColumnContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                return <MessagesColumn messagesData={store.getState().dialogPage.messagesData}/>
            }
            }
        </StoreContext.Consumer>


    );
}

export default MessagesColumnContainer;