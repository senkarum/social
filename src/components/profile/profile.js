import React from 'react';
import UserInfo from './userInfo/userInfo.js'
import MyPostsContainer from './myPosts/myPostsContainer';


const Profile = (props) => {
    return (
        <section className="profile">
            <UserInfo profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    )
};

export default Profile;