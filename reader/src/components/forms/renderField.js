import React from 'react';

const renderField = ({ input, label, type, id, reference, changeCb, meta: { touched, error } }) => {
    return (
        <div>
            <input {...input} placeholder={label} type={type} id={id} ref={reference} onChange={changeCb}/>
            <div>
                {touched && ((error && <span>{error}</span>))}
            </div>
        </div>
    )
}

export default renderField;