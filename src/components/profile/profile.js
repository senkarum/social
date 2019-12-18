import React from "react";
import User from "./myPosts/user.js"
import UserBg from "./myPosts/userBg.js"
import MyPostsContainer from "./myPosts/myPostsContainer";

let  Profile = (props) => {
    return (
        <section className="profile">
            <UserBg/>
            <User/>
            <MyPostsContainer/>
        </section>
    );
};

export default Profile;