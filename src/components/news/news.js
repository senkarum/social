import React from "react";
import style from "./news.module.css";

class News extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <section className={style.news}>
                <h2>Новости</h2>
            </section>
        );
    }
}

export default News;