import {loginAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }

        default:
            return state
    }
};

export const setUserAuthData = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
        }
    }
);


export const setAuthData = () => {
    return (dispatch) => {

        loginAPI.getMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserAuthData(id, email, login))
            }
        });
    }
}

export default authReducer;