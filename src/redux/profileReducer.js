import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
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

    profile: null,
    newPostText: '',
    status: '',
    isFetching: false,
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messages: action.newPostText,
                likes: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return  {
                ...state,
                status: action.status
            };
        case TOGGLE_IS_FETCHING:
            return  {
                ...state,
                isFetching: action.statusFetching,
            };


        default:
            return state;
    }
};

export const addPostActionCreator = (postText) => (
    {
        type: ADD_POST,
        newPostText: postText
    });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status: status
});

export const toggleIsFetching = (statusFetching) => ({
    type: TOGGLE_IS_FETCHING,
    statusFetching: statusFetching
});

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
    }
};



export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
            dispatch(toggleIsFetching(false));
        });

    }
};

export default profileReducer;