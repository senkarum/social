import React from "react";
import style from "./../dialog.module.css";
import DialogContainer from "./dialog/dialogContainer";

class DialogsColumn extends  React.Component {


    render() {
        let dialogsElements = this.props.dialogsData.map((dialog, i) => {
            return  <DialogContainer  id={dialog.id} name={dialog.name} key={i}/>
        });
        return (
            <div className={style.dialogs_columns}>
                { dialogsElements }
            </div>
        );
    }
}

export default DialogsColumn;