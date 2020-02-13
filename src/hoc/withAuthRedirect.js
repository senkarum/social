import {Redirect} from "react-router";
import React from "react";
import {connect} from "react-redux";


export const withAuthRedicert = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />;
            return  <Component {...this.props}/>
        }
    }
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    });
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent
}