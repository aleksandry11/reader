import axios from 'axios';
import { USER_LOGOUT } from '../actinoTypes';

export default {
    setupInterceptors: (store, history) => {
        axios.interceptors.response.use(reponse => {
            return reponse;
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