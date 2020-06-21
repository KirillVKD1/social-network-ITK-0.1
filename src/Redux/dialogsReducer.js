const UPDATE_MY_MESSAGE = 'UPDATE_MY_MESSAGE';

let initialState = {

    newWordText: 'stateValueMessages',


    messagesArray: [
        { id: 1, message: 'Hi', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 2, message: " Chrome doesn't allow extensions to play with special Chrome pages like this one", img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 1, message: "Chrome doesn't allow extensions to play with special Chrome pages like this one", img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 1, message: 'bonjour', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 2, message: "Chrome doesn't allow extensions to play with special Chrome pages like this one Chrome doesn't allow extensions to play with special Chrome pages like this one bonjour", img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 1, message: "Chrome doesn't allow extensions to play with special Chrome pages like this one Chrome doesn't allow extensions to play with special Chrome pages like this one bonjour Chrome doesn't allow extensions to play with special Chrome pages like this one Chrome doesn't allow extensions to play with special Chrome pages like this one bonjour", img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 2, message: '...', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },

    ],

    dialogsArray: [
        { id: 1, name: 'Kirill', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 2, name: 'Andrey', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 3, name: 'Ksusha', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 4, name: 'Tanya', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg'},
        { id: 5, name: 'Pete', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 6, name: 'Vasya', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
        { id: 7, name: 'Dmitry', img: 'https://www.tagmydeals.com/images/no-img-avatar.jpg' },
    ],



}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) { 
        case UPDATE_MY_MESSAGE: 
           
            let newWordText = action.newMessageBody;
            return{ 
                ...state,
                messagesArray: [...state.messagesArray,{id: 1, message:newWordText}],  
            };
        default:
            return state;
    }
}

export const updateMyMessage = (newMessageBody) => {
    return {
        type: UPDATE_MY_MESSAGE,
        newMessageBody,
    }
}


export default dialogsReducer;