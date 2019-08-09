import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../../utils/validate';
import styles from './AddBookForm.module.scss';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
       input: { value: omitValue, onChange, onBlur, ...inputProps },
       meta: omitMeta,
       reference, id,
   }) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            ref={reference}
            id={id}
        />
    );
};

const AddBookForm = ({ handleSubmit }) => {
    const fileInput = React.createRef();

    const handleClick = (e) => {
        e.preventDefault();
        const input = fileInput.current;
        input.click();
    }

    return (
        <form onSubmit={handleSubmit} className="add-book">
            <Field name="addBook" type="file" component={FileInput} id="add-book" reference={fileInput} />
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