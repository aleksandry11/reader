import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { Header } from '../../components/books/Header';
import {userLogout} from "../../actions/user";
import { Redirect } from 'react-router-dom';

import AddBookForm from '../../components/books/forms/AddBookForm';
import Logout from '../../components/LogoutBtn';

import {fetchAll, uploadBook} from '../../actions/book';
import UserBooksList from "../../components/books/UserBooks/UserBooksList";



const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    uploading: state.bookReducer.uploading,
    uploadDone: state.bookReducer.uploadDone,
    uploadError: state.bookReducer.uploadError,
    books: state.bookReducer.books,
    fetchingError: state.bookReducer.fetchingError,
    fetchingDone: state.bookReducer.fetchingDone
});

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => {
        dispatch(userLogout());
    },
    uploadBook: (data) => {
        dispatch(uploadBook(data));
    },
    fetchAll: () => {
        dispatch(fetchAll());
    }
});


const BookList = (props) => {

    const { userLogout, isLogin, uploadBook, books, fetchAll, fetchingDone, uploadError, } = props;

    useEffect(() => fetchAll(), []);

    const logOut = () => {
        userLogout();
    }

    if (!isLogin) return <Redirect to="/login" />;

    return (
        <React.Fragment>
            <Header className="flex-centered">
                <p>Books</p>
                <Logout onClick={logOut}>Logout</Logout>
            </Header>
            {
                fetchingDone ? <UserBooksList books={books} uploadError={uploadError} /> : null
            }
            <AddBookForm onSubmit={uploadBook} />
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);