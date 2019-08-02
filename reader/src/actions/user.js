import {
    USER_LOGIN_REQUEST,
    USER_SIGN_UP_REQUEST,
    USER_LOGOUT,
    ERROR_CLEAR,
    NO_TOKEN_VERIFICATION
} from "../actionTypes";

export const userLogin = (data) => {
    return {
        type: USER_LOGIN_REQUEST,
        payload: data
    }
}

export const userSignUp = (data) => {
    return {
        type: USER_SIGN_UP_REQUEST,
        payload: data
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}

export const errorClear = () => {
    return {
        type: ERROR_CLEAR
    }
}

export const noTokenVerification = () => {
    return {
        type: NO_TOKEN_VERIFICATION
    }
}