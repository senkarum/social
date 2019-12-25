const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: '',
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messages: state.newPostText,
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

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;