import React from "react";
import style from "./../sidebar.module.css";
import Friend from "./friend/friend";


class Friends extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let friendsElements = this.props.friendsData.map((friend, i) => {
            if(i > 5) {
                return false
            }
            return <Friend avatar={friend.avatar} name={friend.name} key={i}/>
        });

        return (
            <div className={style.friends_cont}>
                <h2>Friends</h2>
                { friendsElements }
            </div>
        );
    }

}



export default Friends;