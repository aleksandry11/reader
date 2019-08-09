import { takeEvery, put } from 'redux-saga/effects';
import {fetchAllBooks, getBookById, uploadBook} from '../requests/book';
import {
    BOOK_UPLOAD_ERROR,
    BOOK_UPLOAD_REQUEST,
    BOOK_UPLOAD_SUCCESS,
    FETCH_ALL_BOOKS_ERROR,
    FETCH_ALL_BOOKS_REQUEST,
    FETCH_ALL_BOOKS_SUCCESS,
    FETCH_SINGLE_BOOK_ERROR,
    FETCH_SINGLE_BOOK_REQUEST,
    FETCH_SINGLE_BOOK_SUCCESS
} from "../actionTypes";

function* watchBookUpload() {
    yield takeEvery(BOOK_UPLOAD_REQUEST, handleUploadBook)
}

function* handleUploadBook(action) {
    try {
        const result = yield uploadBook(action.payload);
        console.log(result);
        if (!result.data.errors) {
            yield put({type: BOOK_UPLOAD_SUCCESS, payload: result.data});
        } else {
            yield put({type: BOOK_UPLOAD_ERROR, payload: result.data.errors});
        }

    } catch(error) {
        yield put({type: BOOK_UPLOAD_ERROR});
    }
}

function* watchAllBooksFetching() {
    yield takeEvery(FETCH_ALL_BOOKS_REQUEST, handleFetchBooks);
}

function* handleFetchBooks(action) {
    try {
        const result = yield fetchAllBooks(action.payload);

        if (!result.data.errors) {
            yield put({type: FETCH_ALL_BOOKS_SUCCESS, payload: result.data});
        } else {
            yield put({type: FETCH_ALL_BOOKS_ERROR});
        }

    } catch(err) {
        yield put({type: FETCH_ALL_BOOKS_ERROR});
    }
}

function* watchSingleBookFetch() {
    yield takeEvery(FETCH_SINGLE_BOOK_REQUEST, handleFetchSingleBook);
}

function* handleFetchSingleBook(action) {
    try {
        const result = yield getBookById(action.payload);
        console.log(result);
        if (!result.data.errors) {
            yield put({type: FETCH_SINGLE_BOOK_SUCCESS, payload: result.data});
        } else {
            yield put({type: FETCH_SINGLE_BOOK_ERROR, payload: result.data})
        }
    } catch(err) {
        yield put({type: FETCH_SINGLE_BOOK_ERROR, payload: err});
    }
}

export const bookSagas = [watchBookUpload(), watchAllBooksFetching(), watchSingleBookFetch()];