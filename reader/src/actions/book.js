import {BOOK_UPLOAD_REQUEST, FETCH_ALL_BOOKS_REQUEST, FETCH_SINGLE_BOOK_REQUEST} from "../actionTypes";

export const uploadBook = (data) => {
    return {
        type: BOOK_UPLOAD_REQUEST,
        payload: data
    }
}

export const fetchAll = () => {
    return {
        type: FETCH_ALL_BOOKS_REQUEST
    }
}

export const fetchSingleBook = (data) => {
    return {
        type: FETCH_SINGLE_BOOK_REQUEST,
        payload: data
    }
}