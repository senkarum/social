import React from "react";
import style from "./myPosts.module.css"
import noName from "../../../assets/img/noname.png"
import Preloader from "../../common/preloader/preloader";



const UserInfo = (props) => {
    if (!props.profile)  {
        return <Preloader/>
    }

    return (
        <div className={style.user}>
            <img
                src={!props.profile.photos.small ? noName : props.profile.photos.small}
                alt="" className={style.avatar}/>

            <div className={style.info}>
                <p className={style.name}>{props.profile.fullName}</p>
                <p>About me: <span>{props.profile.aboutMe}</span></p>
                <p className={style.site}>Web site: <span>{props.profile.contacts.facebook}</span></p>
            </div>
        </div>
    )
}


export default UserInfo;