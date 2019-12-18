import React from "react";
import {switchDialogActionCreator} from "../../../../redux/dialogReducer";
import Dialog from "./dialog";
import StoreContext from "../../../../storeContext";


let DialogContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let switchDialog = (id) => {
                        store.dispatch(switchDialogActionCreator(id));
                    };
                    return <Dialog switchDialog={switchDialog} id={props.id} name={props.name}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogContainer;