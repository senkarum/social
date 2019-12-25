import React from "react";
import style from "./header.module.css";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className={style.header}>
                <p className={style.logo}>LOGO</p>
            </header>
        );
    }
}

export default Header;