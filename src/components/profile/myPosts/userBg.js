import React from "react";
import style from "./myPosts.module.css"

class UserBg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.bg_img}>
                <img
                    src="https://i0.wp.com/msoffice-prowork.com/wp-content/uploads/2019/04/microsoft-surface-book-2-technastic_1920_1080.jpg?fit=1920%2C1080&ssl=1"
                    alt=""/>
            </div>
        );
    }

}



export default UserBg;