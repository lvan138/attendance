import rootSaga from './sagas';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store