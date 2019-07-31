import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { store } from '../store/store';

import Auth from '../containers/auth/Auth';
import Unauthorized from '../containers/auth/Unauthorized';
import BookList from '../containers/books/BookList';


const PrivateRoute = ({render: Component, ...rest}) => {
    let isLogin = store.getState().userReducer.isLogin;
    let path = rest.location.pathname;

    return <Route {...rest} render={(props) => (
        isLogin ? <Component {...props} /> : <Redirect to={{
            pathname: '/unauthorized', 
            state: {path}
        }} />
    )} />
}

const routes = () => (
    <Switch>
        <Route path="/login" render={ () => <Auth activeTab={"login"} /> }/>
        <Route path="/sign-up" render={ () => <Auth activeTab={"sign-up"} /> }/>
        <Route path='/unauthorized' component={Unauthorized} />
        <PrivateRoute path='/' render={() => <BookList />} />
    </Switch>
)

export default routes;