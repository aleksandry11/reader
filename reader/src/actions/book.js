import {BOOK_UPLOAD_REQUEST} from "../actionTypes";

export const uploadBook = (data) => {
    return {
        type: BOOK_UPLOAD_REQUEST,
        payload: data
    }
}