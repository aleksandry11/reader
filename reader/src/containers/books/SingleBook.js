import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBook } from "../../actions/book";
import { Redirect } from 'react-router-dom';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import PDF from "../../utils/PDF";

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    book: state.bookReducer.book,
    fetching: state.bookReducer.fetching,
    fetchingError: state.bookReducer.fetchingError,
    fetchingDone: state.bookReducer.fetchingDone,
});

const mapDispatchToProps = (dispatch) => ({
    fetchSingleBook: (data) => {
        dispatch(fetchSingleBook(data));
    }
});

const SingleBook = ({ isLogin, book, fetching, fetchingError, fetchingDone, fetchSingleBook, bookId }) => {

    useEffect( () => {
        fetchSingleBook(bookId);
    }, []);

    if (!isLogin) return <Redirect to="/login" />;

    const source = 'http://localhost:8080/'+ book.path;

    return (
        fetchingDone && !fetching ?
            <PDFViewer handler={PDF} src={source}/> :
            null
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
