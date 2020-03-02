import React from "react";
import style from "./../dialog.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/formsControls/formsControls";



let messageTextarea = React.createRef();
const maxLength = maxLengthCreator(150);
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
            <Field validate={[required, maxLength]} component={Textarea}  name="message" /*value={this.props.addMessageData}*/  ref={messageTextarea} placeholder="Enter your message"/>
            <button className="btn">Отправить</button>
        </form>
    )
}

const AddMessageFormRedux  = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessage;