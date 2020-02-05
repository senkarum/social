import * as axios from 'axios';
const apikey = '6e36f02d-da2a-4923-9071-41195f0b3e5c'
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': apikey,
    }
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

   follow: (userId) => {
        return instance.post(`follow/${userId}`)

    },

    unFollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    }
};


export const loginAPI = {
    getMe: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data
        });
    },
};

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(response => {
                return response.data
            });
    }
};