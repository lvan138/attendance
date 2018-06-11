import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import App from './components/App';
import Full from './containers/Full';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'

//Views
import Login from './views/Pages/Login'
import ForgotPassword from './views/Pages/ForgotPassword/'
import ReturnLogin from './views/Pages/ReturnLogin/ReturnLogin'
// Styles
// Import Flag Icons Set
// import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'
//import style for calander
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render((
    <Provider store = {store}>
      <HashRouter history={history}>
        <App store={store}/>
      </HashRouter>
    </Provider>
), document.getElementById('root'));