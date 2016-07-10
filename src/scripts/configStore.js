import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './reducers/';

const logger = createLogger({collapsed: true});

const enhancer = compose(
    applyMiddleware(thunk, logger)
);

export default function configureStore(initialState) {
    return createStore(
        combineReducers({ ...reducers}),
        initialState,
        enhancer
    );
}
