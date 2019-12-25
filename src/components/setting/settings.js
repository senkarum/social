import React from "react";
import style from "./settings.css";
class Settings extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={style.settings}>
                <h2>Настройки</h2>
            </section>
        );
    }
}


export default Settings;