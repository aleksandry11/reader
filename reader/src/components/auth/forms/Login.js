import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../../utils/validate';
import renderField from '../../forms/renderField';

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="login">
            <Field name="email" type="email" label="Email" component={renderField} />
            <Field name="password" type="password" label="Password" component={renderField} />
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginForm);