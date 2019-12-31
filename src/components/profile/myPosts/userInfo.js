import React from "react";
import style from "./myPosts.module.css"

class UserInfo extends React.Component {


    render() {
        return (
            <div className={style.user}>
                <img
                    src="https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc"
                    alt="" className={style.avatar}/>

                <div className={style.info}>
                    <p className={style.name}>USER</p>
                    <p className={style.birthday}>Date of Birth: <span>23.01.93</span></p>
                    <p className={style.city}>City: <span>Nsk</span></p>
                    <p className={style.education}>Education: <span>9 классов</span></p>
                    <p className={style.site}>Web site: <span>нет</span></p>
                </div>
            </div>
        );
    }

}


export default UserInfo;