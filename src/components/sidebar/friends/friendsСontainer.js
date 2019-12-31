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
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;