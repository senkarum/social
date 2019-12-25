import React from 'react';
import Users from "./users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        addFollow: (userId) => {
            dispatch(followAC(userId));
        },

        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },

        setUser: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;