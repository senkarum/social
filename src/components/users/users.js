import React from 'react';
import style from "./users.module.css";
import * as axios from "axios";
import nonamePhoto from "../../assets/img/noname.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }

    pageSwitcher = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        });

    };

    render() {
        let PagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= PagesCount; i++) {
            pages.push(i);
        }
        let currentPage = this.props.currentPage;

        let paginationElements = pages.map((page, i) => {
            if (currentPage - i < 6 && currentPage - i > -4) {
                return <li onClick={() => {this.pageSwitcher(page)}} className={currentPage === page ?  style.active : ''} key={i}>{page}</li>
            }
        });
        let userElements = this.props.users.map((user, i) => {
            return <div key={i} className={style.user__mini}>
                <img src={user.photos.small != null ? user.photos.small : nonamePhoto} alt=""
                     className={style.user__avatar}/>
                <p className={style.user__name}>{user.name}</p>
                <p className={style.user__status}>{user.status}</p>
                {
                    user.followed
                        ? <button onClick={() => {
                            this.props.unFollow(user.id)
                        }} className={style.user__subscribe__off}>Отписаться</button>
                        : <button onClick={() => {
                            this.props.addFollow(user.id)
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
}


export default Users;