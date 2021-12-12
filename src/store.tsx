import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './modules';

const store = createStore(reducers, applyMiddleware());

export default store;
