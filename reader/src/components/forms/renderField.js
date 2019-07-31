import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <input {...input} placeholder={label} type={type} />
            <div>
                {touched && ((error && <span>{error}</span>))}
            </div>
        </div>
    )
}

export default renderField;