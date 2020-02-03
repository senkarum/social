import React from "react";
import UserInfo from "./myPosts/userInfo.js"
import UserBg from "./myPosts/userBg.js"
import MyPostsContainer from "./myPosts/myPostsContainer";


const Profile = (props) => {
    return (
        <section className="profile">
            <UserBg/>
            <UserInfo profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    )
};

export default Profile;