import React from 'react';
import style from "./users.module.css";
import * as axios from "axios";
import nonamePhoto from "../../assets/img/noname.png"

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items)
        });
    }

    render() {
        let userElements = this.props.users.map(user => {
            return <div key={user.id} className={style.user__mini}>
                <img src={user.photos.small != null ? user.photos.small : nonamePhoto} alt=""
                     className={style.user__avatar}/>
                <p className={style.user__name}>{user.name}</p>
                <p className={style.user__status}>{user.status}</p>
                <p className={style.user__location}>{/*{user.location.country},{user.location.city}*/}</p>
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


        })
        return (
            <section className={style.users}>
                <h2>Users</h2>
                {
                    userElements
                }

            </section>
        )
    }
}


export default Users;