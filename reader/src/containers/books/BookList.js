import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { Header } from '../../components/books/Header';
import {userLogout} from "../../actions/user";
import { Redirect } from 'react-router-dom';

import AddBookForm from '../../components/books/forms/AddBookForm';

import { uploadBook } from '../../actions/book';

const Logout = styled.button`
    width: 50px;
    border: none;
    border-left: 1px solid white;
    background-color: black;
    color: deepskyblue;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
`;

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    uploading: state.bookReducer.uploading,
    uploadDone: state.bookReducer.uploadDone,
    uploadError: state.bookReducer.uploadError
});

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => {
        dispatch(userLogout());
    },
    uploadBook: (data) => {
        dispatch(uploadBook(data));
    }
});


const BookList = (props) => {
    const { userLogout, isLogin, uploadBook } = props;

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
            <AddBookForm onSubmit={uploadBook} />
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);