import { usersAPI } from "../api/api";
import { toggleIsFetching } from "./usersReducer";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_FRIENDS_PAGE = 'SET_CURRENT_FRIENDS_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const UNFOLLOW = 'UNFOLLOW'; 
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {

    friends: [],
    currentPage: 1,
    pageSize: 100,
    totalFriendsCount: 0, 
    inProgress: [],



}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_FRIENDS: {
             state.friends = [];  //zatiraet FRIENDS
            action.friends.map((friend) => {
                if (friend.followed === true) {
                    state.friends.push(friend)
                    return {
                        ...state, friends: action.friends
                    }
                } return friend //ne vozmojno sdelat zapros vseh polzovatelei, chtobi zasetat' v friends!!!!!!!!!!!!!!!!!! max pageSize = 100!!!!!!!
            })
        }


        case UNFOLLOW:

            return {
                ...state,
                friends: [...state.friends.filter((u) => u.id != action.friendId)]
            }


        case SET_CURRENT_FRIENDS_PAGE: {

            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_FRIENDS_COUNT: {
            return { ...state, totalFriendsCount: action.totalFriendsCount }
        } 
        case FOLLOWING_IN_PROGRESS: {//peredaet id knopki v massiv i disablit ee
            return {
                ...state, inProgress: action.inProgress ?
                    [...state.inProgress, action.userId] :
                    state.inProgress.filter(id => id != action.userId)
            }////filter sozdaet massiv esli rezyltat vipolneniya callbacka = true, iz trueshnih sozdaet massiv
        }

        default: return state;
    }
}


export const setFriends = (friends) => ({ type: SET_FRIENDS, friends })

export const setCurrentFriendsPage = (currentPage) => ({ type: SET_CURRENT_FRIENDS_PAGE, currentPage })

export const setTotalFriendsCount = (totalFriendsCount) => ({ type: SET_TOTAL_FRIENDS_COUNT, totalFriendsCount })

export const unFollowSuccess = (friendId) => ({ type: UNFOLLOW, friendId }) 
 
export const toggleInProgress =  (inProgress, userId) => ({ type: FOLLOWING_IN_PROGRESS, inProgress, userId })  


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {debugger
        dispatch(setCurrentFriendsPage(currentPage));
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize)    //beret users s servera (file api.js) 
        dispatch(toggleIsFetching(false));
        dispatch(setFriends(response.items));
        dispatch(setTotalFriendsCount(response.totalCount))

    }
}

export const unFollow = (userId) => {
    return async (dispatch) => { 
        dispatch(toggleInProgress(true, userId))//disable button
        let response = await usersAPI.unFollow(userId)
        if (response.resultCode == 0) {
            dispatch(unFollowSuccess(userId))//
        } 
        dispatch(toggleInProgress(false, userId))
    }
}



export default friendsReducer;