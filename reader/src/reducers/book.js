import {
    BOOK_UPLOAD_ERROR,
    BOOK_UPLOAD_REQUEST,
    BOOK_UPLOAD_SUCCESS, FETCH_ALL_BOOKS_ERROR,
    FETCH_ALL_BOOKS_REQUEST,
    FETCH_ALL_BOOKS_SUCCESS, FETCH_SINGLE_BOOK_ERROR, FETCH_SINGLE_BOOK_REQUEST, FETCH_SINGLE_BOOK_SUCCESS
} from "../actionTypes";

const initialState = {
    uploading: false,
    uploadDone: false,
    uploadError: null,
    book: {},
    fetching: false,
    fetchingDone: false,
    books: [],
    fetchingError: null
}

export default function bookReducer(state = initialState, action) {
    switch(action.type) {
        case BOOK_UPLOAD_REQUEST:
            return {
                ...state,
                uploading: true,
                book: action.payload,
                uploadError: null,
            }

        case BOOK_UPLOAD_SUCCESS:
            console.log(action);
            return {
                ...state,
                uploading: false,
                uploadDone: true,
                book: action.payload,
                books: [...state.books, action.payload]
            }

        case BOOK_UPLOAD_ERROR:
            return {
                ...state,
                uploadError: action.payload,
                uploadDone: false,
                uploading: false
            }

        // fetching
        case FETCH_ALL_BOOKS_REQUEST:
            return {
                ...state,
                fetching: true,
                uploadError: null,
            }

        case FETCH_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetchingDone: true,
                books: action.payload,
            }

        case FETCH_ALL_BOOKS_ERROR:
            return {
                ...state,
                fetching: false,
                fetchingError: action.payload
            }

        case FETCH_SINGLE_BOOK_REQUEST:
            return {
                ...state,
                fetching: true,
                uploadError: null,
            }

        case FETCH_SINGLE_BOOK_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetchingDone: true,
                book: action.payload,
            }

        case FETCH_SINGLE_BOOK_ERROR:
            return {
                ...state,
                fetching: false,
                fetchingError: action.payload
            }

        default:
            return state;
    }
}