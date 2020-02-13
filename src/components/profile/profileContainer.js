import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {getProfile} from '../../redux/profileReducer';
import {Redirect, withRouter} from "react-router/esm/react-router";
import {withAuthRedicert} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5806
        }
        this.props.getProfile(userId)

    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let mapdispatchToProps = {
    getProfile
}

/*let AuthRedirectComponent = withAuthRedicert(ProfileContainer);

let WithUrlDataContainerComponents = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, mapdispatchToProps)(WithUrlDataContainerComponents);*/

export default compose(connect(mapStateToProps, mapdispatchToProps), withRouter,/*withAuthRedicert*/)(ProfileContainer)