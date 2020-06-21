import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { authMe } from "./authReducer";

const INITIALIZED_SUCCESS = "SET_INITIALIZED";

let initialState = {
    initialized: false,

};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}



export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch (authMe()); 
    Promise.all([promise]).then(()=>{ //kogda pridet resultat =>
        dispatch(initializedSuccess())
    })

}

export default appReducer;