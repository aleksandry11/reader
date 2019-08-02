import { all } from 'redux-saga/effects';
import { userSagas } from './user';
import { bookSagas } from './book';

export default function* rootSaga() {
    yield all([ ...userSagas, ...bookSagas ]);
}