import React from "react";
import style from "./footer.module.css";

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className={style.footer}>
                <p className={style.logo}>LOGO</p>
            </footer>
        );
    }
}

export default Footer;