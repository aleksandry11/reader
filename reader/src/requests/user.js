import { post } from './base';

export function login(data) {
    return post('/auth/login/', data);
}

export function signUp(data) {
    return post('/auth/sign-up/', data);
}