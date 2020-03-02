import React from "react";
import style from "./formControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const hasErrror = meta.touched && meta.error;
    return (
        <>
            {hasErrror && <span className={style.error_text}>{meta.error}</span>}
            <textarea className={hasErrror ? style.error : ''} {...input} {...props}/>
        </>
    )
};


export const Input = ({input, meta, ...props}) => {
    const hasErrror = meta.touched && meta.error;
    return (
        <>
            {hasErrror && <span className={style.error_text}>{meta.error}</span>}
            <input className={hasErrror ? style.error : ''} {...input} {...props}/>
        </>
    )
};