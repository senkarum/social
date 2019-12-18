import React from "react";
import {switchDialogActionCreator} from "../../../../redux/dialogReducer";
import Dialog from "./dialog";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        switchDialog: (id) => {
            dispatch(switchDialogActionCreator(id))
        }
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;