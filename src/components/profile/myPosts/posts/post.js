import React from "react";
import style from "./../myPosts.module.css"

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.post}>
                <img
                    src="https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc"
                    alt="" className={style.avatar}/>
                <div className={style.text}>
                    {this.props.messages}
                </div>
                <div className={style.like_count}>
                    нравится: <span>{this.props.likes}</span>
                </div>
            </div>
        );
    }
}

export default Post;