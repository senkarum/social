import React from "react";
import style from "./../dialog.module.css";
import {Field, reduxForm} from "redux-form";



let messageTextarea = React.createRef();

class AddMessage extends  React.Component{

    addMessageBtn = (values) => {
        let newMessage = values.message;
        this.props.addMessage(newMessage);
        console.log(this.props);
    };

    render() {
        return (
            <div className={style.addMessage}>
              <AddMessageFormRedux onSubmit={this.addMessageBtn}/>
            </div>

        );
    }
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" defaultValue={123}  name="message" /*value={this.props.addMessageData}*/  ref={messageTextarea} placeholder="Enter your message"/>
            <button className="btn">Отправить</button>
        </form>
    )
}

const AddMessageFormRedux  = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessage;