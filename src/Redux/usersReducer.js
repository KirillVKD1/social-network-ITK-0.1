import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {

    newWordText: 'stateValueMessages',


    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    inProgress: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }

                    }
                    return u;
                }),
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }


        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case FOLLOWING_IN_PROGRESS: {//peredaet id knopki v massiv i disablit ee

            return {
                ...state, inProgress: action.inProgress ?
                    [...state.inProgress, action.userId] :
                    state.inProgress.filter(id => id != action.userId)
            }////filter sozdaet massiv esli rezyltat vipolneniya callbacka = true, iz trueshnih sozdaet massiv
        }

        default:
            return state;

    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId: initialState.users.id, userId })

export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId: initialState.users.id, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleInProgress = (inProgress, userId) => ({ type: FOLLOWING_IN_PROGRESS, inProgress, userId })  


export const requestUsers = (currentPage, pageSize) => {//krygovaya zavisimost'
    return async(dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));           //pri otpravke zaprosa na server pokazivaet loadingGIF
        let response = await usersAPI.getUsers(currentPage, pageSize)    //beret users s servera (file api.js) //v response peredaetsa to, chto mi polychili ot servera
                dispatch(toggleIsFetching(false));      //Otkluchaet loadingGIF
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
    }
}

export const follow = (userId) => {//krygovaya zavisimost'
    return async(dispatch) => {

        dispatch(toggleInProgress(true, userId));//disable button
        //post prinimaet 3 parametra(nije napisan)
        let response = await usersAPI.follow(userId)
                if (response.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleInProgress(false, userId));//able button
    }
} 

export const unFollow = (userId) => {//krygovaya zavisimost'
    return async(dispatch) => { 

        dispatch(toggleInProgress(true, userId));//disable button
        //post prinimaet 3 parametra(nije napisan)
        let response = await usersAPI.unFollow(userId)
                if (response.resultCode == 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleInProgress(false, userId));//disable button
    }
}


export default usersReducer;