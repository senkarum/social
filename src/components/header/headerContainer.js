import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {setAuthData} from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthData()
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
    setAuthData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);