import { takeEvery, put } from 'redux-saga/effects';
import { uploadBook } from '../requests/book';
import {BOOK_UPLOAD_ERROR, BOOK_UPLOAD_REQUEST, BOOK_UPLOAD_SUCCESS} from "../actionTypes";

function* watchBookUpload() {
    yield takeEvery(BOOK_UPLOAD_REQUEST, handleUploadBook)
}

function* handleUploadBook(action) {
    try {
        const result = yield uploadBook(action.payload);
        if (!result.data.errors) {
            yield put({type: BOOK_UPLOAD_SUCCESS});
        } else {
            yield put({type: BOOK_UPLOAD_ERROR});
        }
    } catch(error) {
        yield put({type: BOOK_UPLOAD_ERROR});
    }
}

export const bookSagas = [watchBookUpload()];