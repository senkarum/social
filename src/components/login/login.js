import React from 'react';
import style from "./login.module.css";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {Input} from "../common/formsControls/formsControls";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.inp_cont + ' ' + style.standart}>
                <Field validate={[required]} component={Input} name={'name'} placeholder={'Login'} type="text"/></div>
            <div className={style.inp_cont + ' ' + style.standart}>
                <Field validate={[required]} component={Input} name={'password'} c placeholder={'Password'} type="text"/>
            </div>
            <div className={style.inp_cont}>
                <Field validate={[required]} component={Input} name={'rememberMe'} placeholder={'checkbox'} type="checkbox"/> Remember me
            </div>
            <div>
                <button className={style.btn}>SEND</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <section>
            <h1>Authorization</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </section>
    )
}

export default Login