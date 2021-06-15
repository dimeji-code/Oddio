import {AUTHENTICATE} from "../actions/auth"
const initialState = {
    loggedIn:  false
}

export default (state= initialState, action) => {
    switch(action.type){
        case AUTHENTICATE:
            const logState = (state.loggedIn===true?false:true)
            return{
                // ...state,
                loggedIn: logState,
            }

        default:
            return state;
    }
}