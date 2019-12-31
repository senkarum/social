import DialogsColumn from "./dialogsColumn";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};
const DialogsColumnContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsColumn);




export default DialogsColumnContainer;