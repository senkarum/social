import React from "react";
import MessagesColumn from "./messagesColumn";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogPage.messagesData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const MessagesColumnContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesColumn);




export default MessagesColumnContainer;