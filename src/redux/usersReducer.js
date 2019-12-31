const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
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

        default:
            return state;
    }
};

export const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId,
});
export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
});

export const setCurrentPageAC = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber
});

export const setTotalUserCountAC = (totalCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalCount: totalCount
})

export default userReducer;