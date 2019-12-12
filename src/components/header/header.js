import React from "react";
import style from "./header.module.css";


let Header = () => {
    return (
        <header className={style.header}>
          <p className={style.logo}>LOGO</p>
        </header>
    );
}

export default Header;