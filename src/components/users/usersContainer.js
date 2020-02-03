import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFething,
    unFollow,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFething(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            header: {
                'API-KEY': '6e36f02d-da2a-4923-9071-41195f0b3e5c',
            }
        })
            .then(response => {
                this.props.toggleIsFething(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    pageSwitcher = (page) => {
        this.props.toggleIsFething(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,  {
            withCredentials: true,
            header: {
                'API-KEY': '6e36f02d-da2a-4923-9071-41195f0b3e5c',
            }
        })
            .then(response => {
                this.props.toggleIsFething(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            {!this.props.isFetching ? <Users totalUsersCount={this.props.totalUsersCount}
                                             pageSize={this.props.pageSize}
                                             currentPage={this.props.currentPage}
                                             users={this.props.users}
                                             pageSwitcher={this.pageSwitcher}
                                             unFollow={this.props.unFollow}
                                             follow={this.props.follow}/> : null}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


let mapDispatchToProps = {
    follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFething
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

/*
let mapDispatchToProps = (dispatch) => {
    return {

        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },

        setUser: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        },

        toggleIsFething: (isFething) => {
            dispatch(toggleIsFethingAC(isFething))
        }
    }
};*/
