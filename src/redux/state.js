let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    postId: 1,
                    messages: 'text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1',
                    likes: 23,
                },

                {
                    postId: 2,
                    messages: 'text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2' +
                        ' text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2',
                    likes: 33,
                },

                {
                    postId: 3,
                    messages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae commodi cum deserunt dignissimos doloribus dolorum, earum error fuga laborum nemo nesciunt rem rerum suscipit voluptas! Ab incidunt tempora velit?',
                    likes: 22,
                },

                {
                    postId: 4,
                    messages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae commodi cum deserunt dignissimos doloribus dolorum, earum error fuga laborum nemo nesciunt rem rerum suscipit voluptas! Ab incidunt tempora velit?',
                    likes: 11,
                },
            ],
            newPostText: '',

        },

        dialogPage: {
            currentDialog: 1,

            dialogsData: [
                {
                    id: 1,
                    name: 'Андрей',
                },

                {
                    id: 2,
                    name: 'Sam',
                },

                {
                    id: 3,
                    name: 'Jid',
                },

                {
                    id: 4,
                    name: 'Hui',
                },
            ],
            messagesData: [

                {
                    id: 1,
                    isUserMessage: true,
                    message: 'привет хуй',
                },
                {
                    id: 1,
                    isUserMessage: false,
                    message: 'привет хуй',
                },
                {
                    id: 1,
                    isUserMessage: true,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },
                {
                    id: 1,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?' +
                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 1,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?' +
                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 1,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?' +
                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 1,
                    isUserMessage: true,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 1,
                    isUserMessage: true,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 1,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?' +
                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },
                {
                    id: 2,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },
                {
                    id: 2,
                    isUserMessage: true,
                    message: 'привет хуй',
                },
                {
                    id: 2,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 3,
                    isUserMessage: true,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 3,
                    isUserMessage: true,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 3,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },

                {
                    id: 4,
                    isUserMessage: false,
                    message: 'привет хуй',
                },

                {
                    id: 4,
                    isUserMessage: false,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere natus odio quasi quo, velit?',
                },
            ]
        },

        sidebarData: {
            friends: [
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'Serega'
                },
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'Ira'
                },
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'Kirill Vadimovich'
                },
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'An'
                },
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'Sam'
                },
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'Samara'
                },
                {
                    avatar: 'https://www.infosgrandslacs.info/sites/default/files/styles/trombino/public/default_images/profile.png?itok=WAjxmEAc',
                    name: 'Vasyan'
                },
            ],
        },
    },

    _callSubscriber() {
        console.log('render');
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        store._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    messages: this._state.profilePage.newPostText,
                    likes: 0,
                };
                this._state.profilePage.postsData.push(newPost);
                this._callSubscriber(this._state);
                break;

            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case 'switchDialogFunction':
                this._state.dialogPage.currentDialog = action.dialogId;
                break;

            case 'ADD-MESSAGE-FUNCTION':
                let newMessage = {
                    id: store.getState().dialogPage.currentDialog,
                    isUserMessage: true,
                    message: action.message,
                };
                this._state.dialogPage.messagesData.push(newMessage);
                store._callSubscriber(this._state);
                break;

            default: return false;
        }
    },
};

window.state = store;

export default store;