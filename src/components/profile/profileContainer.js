import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, updateStatus} from '../../redux/profileReducer';
import {withRouter} from "react-router/esm/react-router";
import {withAuthRedicert} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5806
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    render() {


        return (
            <Profile {...this.props} isFetching={this.props.isFetching} status={this.props.status} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
        );
    }

}





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching
});

let mapdispatchToProps = {
    getProfile,
    getStatus,
    updateStatus
}

/*let AuthRedirectComponent = withAuthRedicert(ProfileContainer);

let WithUrlDataContainerComponents = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, mapdispatchToProps)(WithUrlDataContainerComponents);*/

export default compose(connect(mapStateToProps, mapdispatchToProps), withRouter, /*withAuthRedicert*/)(ProfileContainer)