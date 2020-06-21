import React from 'react';
import profileReducer,{addPost} from './profileReducer';


test('new post should be add', () => {
    let action = addPost('!!!!')

    let state = {

        newPostText: 'stateValue',

        postArray: [
            { id: 1, like: 1, message: 'Hi' },
            { id: 2, like: 2, message: 'Hello' },
            { id: 3, like: 2, message: 'Privet' },

        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.postArray.length).toBe(4)//toBe - ojidaemi result
});
