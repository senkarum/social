import React from "react";
import Friends from "./friends";
import StoreContext from "../../../storeContext";


let FriendsСontainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                   return <Friends friendsData={store.getState().sidebarData.friends}/>
                }
            }
        </StoreContext.Consumer>
    );
};


export default FriendsСontainer;