import React from "react";
import {switchDialogActionCreator} from "../../../../redux/dialogReducer";
import Dialog from "./dialog";


let DialogContainer = (props) => {

    let switchDialog = (id) => {
        props.store.dispatch(switchDialogActionCreator(id));
    };


    return (
        <Dialog switchDialog={switchDialog} id={props.id} name={props.name}/>
    );
};

export default DialogContainer;