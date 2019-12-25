import React from "react";
import AddMessage from "./addMessage";
import {
    addMessageActionCreator,
    updateMessageActionCreator,
} from "../../../redux/dialogReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        addMessageData: state.dialogPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
            dispatch(updateMessageActionCreator(''));
        },

        updateMessage: (text) => {
            dispatch(updateMessageActionCreator(text));
        },

    }
};
const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);



export default AddMessageContainer;