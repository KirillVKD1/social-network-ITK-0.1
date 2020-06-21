import { toggleIsFetching } from '../Redux/usersReducer';
import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {

    newPostText: 'stateValue',

    postArray: [
        { id: 1, like: 1, message: 'Hi' },
        { id: 2, like: 2, message: 'Hello' },
        { id: 3, like: 2, message: 'Privet' },

    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 2
            };

            return {
                ...state,
                postArray: [...state.postArray, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.file }
            }
        }
        default: return state;
    }

}

export const addPost = (newPostText) => {

    return {

        type: ADD_POST, newPostText

    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
}

export const savePhotoSuccess = (file) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        file,
    }
}



export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)//peredaetsa id (APP.jsx) 
        dispatch(setStatus(response.data));
    }
}


export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)//peredaetsa id (APP.jsx) 
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)//peredaetsa id (APP.jsx) 
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}


export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getProfile(userId)//peredaetsa id (APP.jsx) 
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(response.data));
    }
}



export default profileReducer;