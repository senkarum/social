import {
    follow, getUsers,
    setCurrentPage,
    unFollow,
} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import React from 'react';
import Users from './users';
import Preloader from '../common/preloader/preloader';
import {withAuthRedicert} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    pageSwitcher = (page) => {
        this.props.getUsers(page, this.props.pageSize);
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
                                             followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


let mapDispatchToProps = {
    follow,
    unFollow,
    setCurrentPage,
    getUsers
};

let AuthRedirectComponent = withAuthRedicert(UsersContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
