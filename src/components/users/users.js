import React from 'react';
import style from "./users.module.css";
import nonamePhoto from "../../assets/img/noname.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let PagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    if (pages.length === 0) {
        for (let i = 1; i <= PagesCount; i++) {
            pages.push(i);
        }
    }

    let currentPage = props.currentPage;

    let paginationElements = pages.map((page, i) => {
        if (currentPage - i < 6 && currentPage - i > -4) {
            return <li onClick={() => {
                props.pageSwitcher(page)
            }} className={currentPage === page ? style.active : ''} key={i}>{page}</li>
        }
    });

    let userElements = props.users.map((user, i) => {
        return <div key={i} className={style.user__mini}>

            <img src={user.photos.small != null ? user.photos.small : nonamePhoto} alt=""
                 className={style.user__avatar}/>
            <p className={style.user__name}><NavLink to={'/profile/' + user.id}>{user.name}   </NavLink></p>
            <p className={style.user__id}>{user.id}</p>
            <p className={style.user__status}>{user.status}</p>
            {
                user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unFollow(user.id)
                    }} className={style.user__subscribe__off}>Отписаться</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                       props.follow(user.id)
                    }} className={style.user__subscribe}>Подписаться</button>
            }
        </div>
    });
    return (
        <section className={style.users}>
            <h2>Users</h2>

            {
                userElements
            }

            <ul className={style.pagination_list}>
                {
                    paginationElements
                }
            </ul>

        </section>
    )
}

export default Users