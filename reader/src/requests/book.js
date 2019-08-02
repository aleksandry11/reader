import { post } from './base';

export function uploadBook(data) {
    let fd = new FormData();
    fd.append('book', data);
    return post('/books/', fd, {
        'Content-Type': 'multipart/form-data'
    });
}