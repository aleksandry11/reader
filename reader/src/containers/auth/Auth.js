import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthPage from '../../components/auth/AuthPage';

import { userLogin, userSignUp, errorClear } from '../../actions/user';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    signUpDone: state.userReducer.signUpDone,
    signUpError: state.userReducer.signUpError,
    loginError: state.userReducer.loginError,
})

const mapDispatchToProps = (dispatch) => ({
    userLogin: (values) => {
        dispatch(userLogin(values));
    },
    userSignUp: (values) => {
        dispatch(userSignUp(values));
    },
    errorClear: () => {
        dispatch(errorClear());
    }
});

const Auth = (props) => {
    const {
        activeTab,
        userLogin,
        userSignUp,
        isLogin,
        signUpDone,
        loginError,
        signUpError,
        errorClear
    } = props;

    const handleLogin = (values) => {
        userLogin(values);
    };

    const handleSignUp = (values) => {
        userSignUp(values);
    };

    if (isLogin) return <Redirect to='/' />;

    return (
        <React.Fragment>
            <AuthPage
                activeTab={activeTab}
                signUpDone={signUpDone}
                loginError={loginError}
                signUpError={signUpError}
                errorClear={errorClear}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
            />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);