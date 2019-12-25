import React from "react";
import style from "./music.module.css";

class Music extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className={style.music}>
                <h2>Музыка</h2>
            </section>
        );
    }
}


export default Music;