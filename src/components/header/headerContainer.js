import React from 'react';
import Header from './header';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserAuthData(id, email, login)
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    setUserAuthData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);