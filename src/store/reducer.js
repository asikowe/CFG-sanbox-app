import { GET_USERS, LOG_IN, LOG_OUT, REGISTER_USER } from "./actions";

const initialState = {
    isAuthenticated: false,
    user: {username: '', pswd: ''}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, user: action.payload}
        case LOG_IN:
            return { ...state, isAuthenticated: true }
        case LOG_OUT:
            return { ...state, isAuthenticated: false };
        case REGISTER_USER: 
            return {isAuthenticated: true, user: {username: action.payload.username, pswd: action.payload.pswd}};
        default:
            return state;
    }
}

export default userReducer;