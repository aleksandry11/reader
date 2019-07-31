import { combineReducers } from 'redux';
import userReducer from './user';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    userReducer,
    form: formReducer
})