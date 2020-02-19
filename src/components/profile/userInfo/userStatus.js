import React from "react";


class UserStatus extends React.Component {
    statusInputRef = React.createRef();
    state = {
        editMode: false,
        status: this.props.status,

    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () =>  {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.statusInputRef.current.value);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <p onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</p>
                    : <>
                        <input onChange={this.onStatusChange} ref={this.statusInputRef} autoFocus onBlur={this.deactivateEditMode} defaultValue={this.props.status}/>
                    </>
                }

            </div>
        )
    }
}


export default UserStatus;