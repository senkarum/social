import React from "react";
import style from "../myPosts/myPosts.module.css"
import noName from "../../../assets/img/noname.png"
import Preloader from "../../common/preloader/preloader";
import UserStatus from "./userStatus";



const UserInfo = (props) => {
    if (!props.profile || props.isFetching)  {
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
            <UserStatus  status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}


export default UserInfo;