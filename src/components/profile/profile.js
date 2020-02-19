import React from 'react';
import UserInfo from './userInfo/userInfo.js'
import MyPostsContainer from './myPosts/myPostsContainer';


const Profile = (props) => {
    return (
        <section className="profile">
            <UserInfo isFetching={props.isFetching} status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    )
};

export default Profile;