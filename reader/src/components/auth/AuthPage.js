import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './forms/Login';
import SignUpForm from './forms/Signup';

const ErrorRender = ({ error }) => {
    let errorsArr = [];
    for(let key in error) {
        errorsArr.push(error[key])
    }
    return (
        <div>
            {errorsArr.map((item, index) => {
                return <p id="error" key={index}>{item}</p>
            })}
        </div>
    )
}

const LoginBlock = (signUpDone, loginError, handleLogin) => {
    console.log(loginError);
    return (
        <React.Fragment>
            { signUpDone ? <p>Registration done! Please login</p> : null }
            <ErrorRender error={loginError} />
            <LoginForm onSubmit={handleLogin} />
            
        </React.Fragment>
    )
}

const SignUpBlock = (signUpError, handleSignUp) => {
    return (
        <React.Fragment>
            <ErrorRender error={signUpError} />
            <SignUpForm onSubmit={handleSignUp} />
        </React.Fragment>
    )
}

const AuthPage = ({ activeTab, signUpDone, loginError, signUpError, errorClear, handleLogin, handleSignUp }) => {

    if (signUpDone && activeTab === "sign-up") return <Redirect to="/login" />

    return (
        <section>
            <div>
                <div className="logo">
                    <Link to="/">
                        placeholder for logo
                    </Link>
                </div>
                

                <div className="nav-links">
                    <Link
                        to="/login"
                        onClick={() => errorClear()}
                    >
                        Login
                    </Link>

                    <Link
                        to="/sign-up"
                        onClick={() => errorClear()}
                    >
                        Sign Up
                    </Link>
                </div>

                {
                    activeTab === "login" ? 
                        LoginBlock(signUpDone, loginError, handleLogin) :
                        SignUpBlock(signUpError, handleSignUp)
                }

            </div>
        </section>
    )
}

export default AuthPage;