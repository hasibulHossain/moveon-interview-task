import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root_reducer';

// for redux devtools support
const composeEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
);

export default store;