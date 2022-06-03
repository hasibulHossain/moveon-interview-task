import * as actions from '../types';
  
function product(state = initialState, { type, payload }) {
    switch (type) {
        case actions.PRODUCT_LOADING:
            return {
                ...state,
                test: payload
            };
            
        case actions.PRODUCT_LOADED:
            return {
                ...state,
                test: payload
            };

        case actions.PRODUCT_LOADING_FAILED:
            return {
                ...state,
                test: payload
            };

        default:
        return state;
    }
};

const initialState = {
    isLoading: false,
    isFetched: false,
    error: false,
    test: "",
    id: null,
    discountedPrice: null,
    oldPrice: null,
    discountedPercentage: null,
    product: {
        id: null,
        mainImage: "",
        gallery: [],
        ratingCount: null,
        ratingAverage: null,
        skus: [],
        varient: []
    }
};

export default product;