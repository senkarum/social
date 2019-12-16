const ADD_MESSAGE_FUNCTION = 'ADD-MESSAGE-FUNCTION';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SWITCH_DIALOG = 'SWITCH-DIALOG';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE_FUNCTION:
            let newMessage = {
                id: state.currentDialog,
                isUserMessage: true,
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;

        case SWITCH_DIALOG:
            state.currentDialog = action.dialogId;
            return state;

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

export default  dialogReducer;