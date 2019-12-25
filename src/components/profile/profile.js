import React from "react";
import UserInfo from "./myPosts/userInfo.js"
import UserBg from "./myPosts/userBg.js"
import MyPostsContainer from "./myPosts/myPostsContainer";


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="profile">
                <UserBg/>
                <UserInfo/>
                <MyPostsContainer/>
            </section>
        );
    }

}

export default Profile;