import axios from 'axios';
import { USER_LOGOUT } from '../actionTypes';

export default {
    setupInterceptors: (store, history) => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            switch(error.status) {
                case 401:
                    store.dispatch({type: USER_LOGOUT});
                    break;
                case 404:
                    history.push('/not-found');
                    break;
                case 500:
                    history.push('/server-error');
                    break;
                default:
                    break;
            }

            return Promise.reject(error);
        });
    },
}