import { combineReducers } from 'redux';

// Reducers
import { product } from './store/product'

export default combineReducers({
    product: product,
});
