import React from 'react';
import styles from './UserBooksList.module.scss';
import { Link } from 'react-router-dom';

import Error from '../../Error';

const UserBooksList = ({ books, uploadError }) => {
    const listItems = books.map((item) => {
        return (
            <div className={styles.list_item} key={item.id}>
                <Link to={`/books/${item.id}`}>{item.name}</Link>
            </div>
        )
    });
    return (
        <div className={styles.list_wrapper}>
            {listItems}
            <Error errors={uploadError} />
        </div>
    )
}

export default UserBooksList;