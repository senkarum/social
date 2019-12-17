import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
    _state: {
        profilePage: {


        },

        dialogPage: {
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
            ],
            newMessageText: '',
            currentDialog: 1,
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebarData = sidebarReducer(this._state.sidebarData, action);
        this._callSubscriber(this._state);
    },
};






window.state = store;

export default store;