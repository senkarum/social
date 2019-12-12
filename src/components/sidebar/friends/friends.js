import React from "react";
import style from "./friends.module.css";
import Friend from "./friend/friend";


let Friends = (props) => {

    let friendsElements = props.friendsData.map((friend, i) => {
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


export default Friends;