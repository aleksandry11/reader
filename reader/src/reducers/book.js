import {BOOK_UPLOAD_ERROR, BOOK_UPLOAD_REQUEST, BOOK_UPLOAD_SUCCESS} from "../actionTypes";

const initialState = {
    uploading: false,
    uploadDone: false,
    uploadError: null,
    book: {}
}

export default function bookReducer(state = initialState, action) {
    switch(action.type) {
        case BOOK_UPLOAD_REQUEST:
            return {
                ...state,
                uploading: true,
                book: action.payload
            }

        case BOOK_UPLOAD_SUCCESS:
            return {
                ...state,
                uploading: false,
                uploadDone: true,
                book: action.payload
            }

        case BOOK_UPLOAD_ERROR:
            return {
                ...state,
                uploadError: action.payload,
                uploadDone: false,
                uploading: false
            }

        default:
            return state;
    }
}