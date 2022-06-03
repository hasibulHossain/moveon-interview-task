import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './root_reducer';

const persistConfig = {
    key: "__store__",
    storage
};

// for redux devtools support
const composeEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const middleware = [thunk];

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedRootReducer,
    composeEnhancer(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export {store as default, persistor};