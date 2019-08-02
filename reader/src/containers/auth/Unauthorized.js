import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userLogin } from '../../actions/user';

import UnauthorizedMessage from '../../components/Unahtorized/UnauthorizedMessage';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    loginError: state.userReducer.loginError,
    isLoading: state.userReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    userLogin: (values) => {
        dispatch(userLogin(values));
    }
})

const Unauthorized = ({ userLogin, isLogin, location, loginError, isLoading }) => {
    const handleLogin = (values) => {
        userLogin(values);
    };

    if (isLogin) return <Redirect to={location.state.path} />

    return (
        <React.Fragment>
            <div>
                {
                    !isLoading ?
                        <UnauthorizedMessage handleLogin={handleLogin} loginError={loginError} /> :
                        null
                }
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Unauthorized);