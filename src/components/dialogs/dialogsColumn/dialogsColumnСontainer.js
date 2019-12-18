import React from "react";
import StoreContext from "../../../storeContext";
import DialogsColumn from "./dialogsColumn";


let DialogsColumnContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
               return <DialogsColumn dialogsData={store.getState().dialogPage.dialogsData}/>
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsColumnContainer;