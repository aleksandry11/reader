import React from 'react';

const renderField = ({ input, label, type, id, reference, changeCb, meta: { touched, error }}) => {
    return (
        <div>
            {
                changeCb ?
                    <input {...input} placeholder={label} type={type} id={id} ref={reference} onChange={changeCb}/> :
                    <input {...input} placeholder={label} type={type} id={id} ref={reference}/>
            }
            <div>
                {touched && ((error && <span>{error}</span>))}
            </div>
        </div>
    )
}

export default renderField;