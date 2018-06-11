import React from 'react'
// Containers
import Full from '../containers/Full'

//Views
import Login from '../views/Pages/Login'
import ForgotPassword from '../views/Pages/ForgotPassword/'
import ReturnLogin from '../views/Pages/ReturnLogin/ReturnLogin'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {checkWidgetAuthorization, checkAuthorization } from '../helper/checkAuth'

const App = ({store}) => (
    <Switch>
        <Route exact path="/login" name="Login Page" render={(props) => (
            !checkAuthorization(store.dispatch) ?
            <Login {...props} /> :
            <Redirect to='/' />
            )} />
        <Route exact path="/forgot-password" name="Forgot Password" component={ForgotPassword}/>
        <Route exact path="/return-login" name="return login" component={ReturnLogin}/>
        <Route path="/" name="Home" render={(props) => (
            checkAuthorization(store.dispatch) ?
            <Full {...props} store={store}/> :
            <Redirect to='/login' />
            )} />
    </Switch>
)

export default App