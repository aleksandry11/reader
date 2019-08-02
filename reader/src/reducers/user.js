import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_ERROR,
    USER_LOGOUT,
    ERROR_CLEAR, NO_TOKEN_VERIFICATION
} from "../actionTypes";

const initialState = {
    isLogin: false,
    signUpDone: false,
    user: {},
    loginError: null,
    signUpError: null,
    isLoading: true
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        // user login
        case USER_LOGIN_REQUEST: 
            return {
                ...state,
                isLogin: false,
                user: action.payload,
                isLoading: true
            }

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.payload,
                signUpDone: false,
                loginError: null,
                isLoading: false,
            }

        case USER_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            }

        // user registration
        case USER_SIGN_UP_REQUEST:
            return {
                ...state,
                signUpDone: false
            }

        case USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpDone: true,
                signUpError: null
            }

        case USER_SIGN_UP_ERROR:
            return {
                ...state,
                signUpDone: false,
                signUpError: action.payload
            }

        // user logout
        case USER_LOGOUT:
            localStorage.removeItem('br_token');
            return {
                ...state,
                isLogin: false,
                user: {},
                isLoading: false
            }

        case ERROR_CLEAR:
            return {
                ...state,
                loginError: null,
                signUpError: null
            }

        case NO_TOKEN_VERIFICATION:
            return {
                ...state,
                isLoading: false
            }
            
        default:
            return state;
    }
}