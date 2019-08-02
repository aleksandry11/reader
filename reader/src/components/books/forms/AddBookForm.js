import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../../utils/validate';
import renderField from '../../forms/renderField';
import styles from './AddBookForm.module.scss';

const AddBookForm = ({ handleSubmit }) => {
    const [files, setFiles] = useState([]);
    const fileInput = React.createRef();

    const handleClick = (e) => {
        e.preventDefault();
        const input = fileInput.current;
        input.click();
    }
    const updateFilesCb = (e) => {
        setFiles([...fileInput.current.files]);
    }
    return (
        <form onSubmit={handleSubmit} className="add-book">
            <Field name="add_book" type="file" component={renderField} id="add-book" reference={fileInput} changeCb={updateFilesCb} />
            <div className={styles.wrapper}>
                <button onClick={handleClick} className={styles.select}>Choose a book</button>
                <button type="submit" className={styles.upload}>Upload</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add-book',
    validate
})(AddBookForm);