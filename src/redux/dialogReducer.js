const ADD_MESSAGE_FUNCTION = 'ADD-MESSAGE-FUNCTION';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SWITCH_DIALOG = 'SWITCH-DIALOG';


let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case ADD_MESSAGE_FUNCTION: {
            let newMessage = {
                id: state.currentDialog,
                isUserMessage: true,
                message: action.message,
            };
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData],
                newMessageText: ''
            };
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy = {
                ...state,
                newMessageText: action.message
            };
            return stateCopy;
        }

        case SWITCH_DIALOG: {
            stateCopy = {
                ...state,
                currentDialog: action.dialogId
            };
            return stateCopy;
        }


        default:
            return state;
    }

};

export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE_FUNCTION,
    message: message,
});

export const updateMessageActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: message
});

export const switchDialogActionCreator = (dialogId) => ({
    type: SWITCH_DIALOG,
    dialogId: dialogId,
});



export default dialogReducer;