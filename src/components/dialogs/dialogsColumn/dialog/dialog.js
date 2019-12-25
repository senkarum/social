import React from "react";
import style from "./../../dialog.module.css";
import {NavLink} from "react-router-dom";

class Dialog extends React.Component {
    constructor(props){
        super(props)
    }

    switchDialog = (e) => {
        let currentId = e.target.getAttribute('data-id');
        this.props.switchDialog(currentId)
    };

    render() {
        return (
            <div className={style.dialog_item}>
                <NavLink onClick={this.switchDialog} data-id={this.props.id} activeClassName={style.active}
                         to={`/dialog/${this.props.id}`}>{this.props.name}</NavLink>
            </div>
        );
    }
}


export default Dialog;