import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { post } from './api_client/base';

import { store, history } from './store/store';
import Routes from './routes/routes';

import './App.css';
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from './actinoTypes';

if (localStorage.token) {
    post('/auth/token-verify/', {}, {
        'Authorization': 'Bearer ' + localStorage.token
        })
        .then(() => {
            store.dispatch({ type: USER_LOGIN_SUCCESS });
        })
        .catch(() => {
            store.dispatch({ type: USER_LOGOUT });
        });
}

const App = () => {

    return (
        <Provider store={ store }>
            <div className="App">
                <Router history={history}>
                    <Routes />
                </Router>
            </div>
        </Provider>
    );
}

export default App;
