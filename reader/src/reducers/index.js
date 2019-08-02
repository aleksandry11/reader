import { combineReducers } from 'redux';
import userReducer from './user';
import bookReducer from './book';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    userReducer,
    bookReducer,
    form: formReducer
})