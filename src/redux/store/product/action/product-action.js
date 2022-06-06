import * as types from '../types';

/**
 * a summery
 * @param {String} test 
 * @returns {{type: Number, payload: String}}
 */
// export const testOne = (test) => {
//     return {
//         type: types.PRODUCT_LOADING,
//         payload: test
//     }
// };


export const toggleIsVariantSelected = ({isVariantColorSelected: isVariantColorSelected, swiper: swiper, selectedVariantColor: selectedVariantColor}) => {
    const payload = {
        selectedVariantColor: selectedVariantColor,
        isVariantColorSelected: isVariantColorSelected,
        swiper: swiper
    }

    return { 
        type: types.PRODUCT_SLIDER_UPDATED,
        payload: payload };
}


export const updateSliderArr = (gallery) => {
    return {
        type: types.PRODUCT_SLIDER_GALLERY_UPDATED,
        payload: gallery
    }
}

export const updateProduct = (product) => {
    const payload = {
        discountedPrice: null,
        oldPrice: null,
        discountedPercentage: null,
    }

    if(product != undefined) {
        payload.discountedPrice = product.price.discounted;
        payload.oldPrice = product.price.old;

        // calculate discount percentage
        const discount_percent = 100 - ( ( product.price.discounted / product.price.old ) * 100 );
        const discount = '' +  Math.round( discount_percent);

        payload.discountedPercentage = discount;
    } 

    return {
        type: types.PRODUCT_UPDATE,
        payload: payload
    }
}