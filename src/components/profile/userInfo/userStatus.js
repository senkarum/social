import React from "react";


class UserStatus extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <p onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</p>
                    : <>
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </>
                }

            </div>
        )
    }
}


export default UserStatus;