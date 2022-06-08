import * as actions from '../types';

const initialState = {
  isLoading: false,
  isFetched: false,
  error: false,
  id: null,
  title: "Product title",
  discountedPrice: 25,
  oldPrice: 30,
  discountedPercentage: 30,
  productDetails: {
      mainImage: "",
      gallery: [],
      ratingCount: null,
      ratingAverage: null,
      skus: [],
      variants: []
  },
  ui: {
      swiper: null,
      isVariantColorSelected: false,
      selectedVariantColor: {
        color: [],
        size: []
      },
  }
};

function product(state = initialState, { type, payload }) {
    switch (type) {
        case actions.PRODUCT_LOADING_INPROGRESS:
            return {
                ...state,
                isLoading: payload.loading
            };

        case actions.PRODUCT_UPDATE:
            return {
                ...state,
                discountedPrice: payload.discountedPrice || state.discountedPrice,
                oldPrice: payload.oldPrice || state.oldPrice,
                discountedPercentage: payload.discountedPercentage || state.discountedPercentage,
            };

        case actions.PRODUCT_SLIDER_GALLERY_UPDATED:
            return {
                ...state,
                productDetails: {
                    ...state.productDetails,
                    gallery: payload
                }
            };

        case actions.PRODUCT_SLIDER_UPDATED:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    swiper: payload.swiper || state.ui.swiper,
                    isVariantColorSelected: payload.isVariantColorSelected,
                    selectedVariantColor: payload.selectedVariantColor,
                }
            };
            
        case actions.PRODUCT_LOADED:
            return {
                ...state,
                isFetched: true,
                isLoading: false,
                id: payload.id,
                title: payload.title,
                discountedPrice: payload.price.discounted,
                oldPrice: payload.price.old,
                discountedPercentage: payload.discountedPercentage,
                productDetails: {
                  mainImage: payload.image,
                  gallery: payload.gallery,
                  ratingCount: payload.ratings_count,
                  ratingAverage: payload.ratings_average,
                  skus: payload.variation.skus,
                  variants: payload.variation.props,
                }
            };

        case actions.PRODUCT_LOADING_FAILED:
            return {
                ...state,
                isLoading: false,
                error: true
            };

        default:
        return state;
    }
};

export default product;