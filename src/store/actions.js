export const GET_USERS = "GET_USERS";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const REGISTER_USER = "REGISTER_USER";

export const getUsers = user => ({
    type: GET_USERS,
    payload: user
});

export const logIn = user => ({
    type: LOG_IN,
    payload: user
});

export const logOut = user => ({
    type: LOG_OUT,
    payload: user
});

export const registerUser = user => ({
    type: REGISTER_USER,
    payload: user
});
