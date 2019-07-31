import React from 'react';

const ErrorRender = ({error}) => {
    let errorsArr = [];

    for (let key in error) {
        if (error.hasOwnProperty(key)) {
            errorsArr.push(error[key]);
        }
    }

    return (
        <div>
            {
                errorsArr.map((item, index) => {
                    return <p id="error" key={index}>{item}</p>
                })
            }
        </div>
    )
}

const UnauthorizedMessage = ({ handleLogin, loginError }) => {
    return (
        <div>
            <h5>Unfortunately, the page you are trying to view is available only to the logged in users.</h5>
            <h5>After successful login you will be redirected to the requested page.</h5>
            <ErrorRender error={loginError} />
        </div>

    )
}

export default UnauthorizedMessage;