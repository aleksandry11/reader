import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { store } from '../store/store';

import Auth from '../containers/auth/Auth';
import Unauthorized from '../containers/auth/Unauthorized';
import BookList from '../containers/books/BookList';
import SingleBook from "../containers/books/SingleBook";


const ProtectedRoute = ({render: Component, ...rest}) => {
    let { isLogin, isLoading } = store.getState().userReducer;
    const [ loading, setLoading ] = useState(isLoading);
    useEffect(() => setLoading(store.getState().userReducer.isLoading), [ isLoading ] );
    let path = rest.location.pathname;
    if (loading) return null;
    return <Route {...rest} render={(props) => (
            isLogin ? <Component {...props} /> : <Redirect to={{
                pathname: '/login',
                state: {path}
            }} />
        )} />
}

const routes = () => (
    <Switch>
        <Route path="/login" render={ () => <Auth activeTab={"login"} /> }/>
        <Route path="/sign-up" render={ () => <Auth activeTab={"sign-up"} /> }/>
        <Route path='/unauthorized' component={Unauthorized} />
        <ProtectedRoute exact path='/' render={() => <BookList />} />
        <ProtectedRoute path='/books/:id' render={ ({ match }) =>
            <SingleBook bookId={match.params.id}/>
        } />
    </Switch>
)

export default routes;