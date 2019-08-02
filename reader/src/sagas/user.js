import { takeEvery, put } from 'redux-saga/effects';
import { login, signUp } from '../requests/user';
import jwt from 'jsonwebtoken';

import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_ERROR, 
    USER_SIGN_UP_REQUEST, 
    USER_SIGN_UP_SUCCESS, 
    USER_SIGN_UP_ERROR 
} from '../actionTypes';


// login

function* watchUserLogin() {
    yield takeEvery(USER_LOGIN_REQUEST, userLogin)
}

function* userLogin(action) {
    try {
        const result = yield login(action.payload);
        if (result.data.token) {
            localStorage.setItem('br_token', result.data.token);
            let user = jwt.decode(result.data.token);

            yield put({type: USER_LOGIN_SUCCESS, payload: user});
        } else {
            yield put({type: USER_LOGIN_ERROR, payload: result.data.errors});    
        }
    } catch(error) {
        yield put({type: USER_LOGIN_ERROR, payload: error.response.data});
    }
}

// sign up

function* watchUserSignUp() {
    yield takeEvery(USER_SIGN_UP_REQUEST, userSignUp);
}

function* userSignUp(action) {
    try {

        const result = yield signUp(action.payload);
        if (result.data.errors) {
            yield put({type: USER_SIGN_UP_ERROR, payload: result.data.errors})
        } else {
            yield put({type: USER_SIGN_UP_SUCCESS });
        }
    } catch(error) {
        yield put({type: USER_SIGN_UP_ERROR, payload: error.response.data})
    }
}   

export const userSagas = [watchUserLogin(), watchUserSignUp()];