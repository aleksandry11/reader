import React from 'react'
import { Field, reduxForm } from 'redux-form';
import validate from '../../../utils/validate';
import renderField from '../../forms/renderField';

const SignUpForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="signup">
            <Field name="email" type="email" label="Email" component={renderField}/>
            <Field name="password" type="password" label="Password" component={renderField}/>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm);