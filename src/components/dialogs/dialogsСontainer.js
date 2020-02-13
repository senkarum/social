import React from 'react';
import Dialogs from './dialogs';
import {connect} from 'react-redux';
import {withAuthRedicert} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {


    render() {


        return (
          <Dialogs/>
        );
    }
}

const mapStateToProps = (state) => ({
});

export default  compose(connect(mapStateToProps), withAuthRedicert)(DialogsContainer);
