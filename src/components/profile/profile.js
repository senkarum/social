import React from "react";
import MyPosts from "./myPosts/myPosts.js"
import User from "./myPosts/user.js"
import UserBg from "./myPosts/userBg.js"

let  Profile = (props) => {
    return (
        <section className="profile">
            <UserBg/>
            <User/>

            <MyPosts store={props.store}/>
        </section>
    );
}

export default Profile;