import React from "react";
import Friends from "./friends";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebarData.friends,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};
const FriendsСontainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsСontainer;