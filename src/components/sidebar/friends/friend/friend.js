import React from "react";
import style from "./../../sidebar.module.css";

class Friend extends React.Component {


    render() {
        return (
            <div className={style.friend}>
                <img src={this.props.avatar} alt=""/>
                <p>{this.props.name}</p>
            </div>
        );
    }

}




export default Friend;