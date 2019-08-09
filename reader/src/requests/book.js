import { post, get } from './base';
import jwt from 'jsonwebtoken';

export function uploadBook(data) {
    let fd = new FormData();
    let user = jwt.decode(localStorage.br_token);
    fd.append('user_id', user.data.id);
    fd.append('book', data.addBook);
    return post('/books/', fd, {
        'Content-Type': 'multipart/form-data'
    });
}

export function fetchAllBooks() {
    return get('/books/', {
        'Authorization': 'Bearer ' + localStorage.br_token
    });
}

export function getBookById(id) {
    return get(`/books/${id}`);
}