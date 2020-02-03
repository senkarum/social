const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state, users: action.users,
            };

        case SET_CURRENT_PAGE:
            return  {
                ...state,
                currentPage: action.pageNumber
            };
        case SET_TOTAL_USER_COUNT:
            return  {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return  {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state;
    }
};

export const follow = (userId) => ({
    type: FOLLOW,
    userId: userId,
});
export const unFollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber
});

export const setTotalUserCount = (totalCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalCount: totalCount
});

export const toggleIsFething = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});

export default userReducer;