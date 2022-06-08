import axios from 'axios';
import { variantNameEnum } from '../../../../common/enum';
import * as types from '../types';

/**
 * Fetch product details from remote url
 * @since V 1.0.0
 * @returns {void}
 */
export const fetchProductDetails = () => async (dispatch) => {
    const baseUrl = "https://moveon-api-server.sbox.ali2bd.net/api/v1";
    const url = `${baseUrl}/customer/dummy-product`;

   try {

       dispatch({type: types.PRODUCT_LOADING_INPROGRESS, payload: {loading: true}});

       const res = await axios.get(url);

        // rename "image" property name with "url" property on color variant value as per need
       const colorVariations = res.data.variation.props.filter(item => item.name === variantNameEnum['Color']);
       const updatedColorVariations = colorVariations[0].values.map(item => {
           return {
               ...item,
               url: item.image
           }
        })
        
       const updatedRes = {
           ...res.data,
           discountedPercentage: calculateDiscountPercentage(res.data.price.discounted, res.data.price.old),
           variation: {
               ...res.data.variation,
               props: [
                    res.data.variation.props[0] =  {
                        ...res.data.variation.props[0],
                        values: updatedColorVariations,
                    },
                    res.data.variation.props[1] =  {
                        ...res.data.variation.props[1],
                    }
               ]
           }
        };
       
       dispatch({type: types.PRODUCT_LOADED, payload: updatedRes});

       const initialVariationProps = {color:[updatedRes.variation.props[0].values[0]], size: [updatedRes.variation.props[1].values[0]]};

       dispatch(toggleIsVariantSelected({swiper: null, isVariantColorSelected: true, selectedVariantColor: initialVariationProps}));

        const galleryCopy = [...updatedRes.gallery];
        const initialSelectedColorVariant = updatedRes.variation.props[0].values[0];
        galleryCopy.splice(0, 0, initialSelectedColorVariant);

        dispatch(updateSliderArr(galleryCopy));
    } catch (error) {
       dispatch({type: types.PRODUCT_LOADING_FAILED, payload: {error: true, loading: false}});
   }
};



/**
 * 
 * @since V 1.0.0
 * @param {{isVariantColorSelected: boolean, swiper: object, selectedVariantColor: object}}  
 * @returns {void} - Dispatch PRODUCT_SLIDER_UPDATED 
 */
export const toggleIsVariantSelected = ({isVariantColorSelected: isVariantColorSelected, swiper: swiper, selectedVariantColor: selectedVariantColor}) => {
    const payload = {
        selectedVariantColor: selectedVariantColor,
        isVariantColorSelected: isVariantColorSelected,
        swiper: swiper
    }

    return { 
        type: types.PRODUCT_SLIDER_UPDATED,
        payload: payload
    };
}

/**
 * @since V 1.0.0
 * @param {array} gallery - slider image array
 * @returns {void} - dispatch PRODUCT_SLIDER_GALLERY_UPDATED
 */
export const updateSliderArr = (galleryImages) => {
    return {
        type: types.PRODUCT_SLIDER_GALLERY_UPDATED,
        payload: galleryImages
    }
}

/**
 * @since V 1.0.0
 * @param {object} product - updated product
 * @returns {void} - dispatch PRODUCT_UPDATE
 */
export const updateProduct = (product) => {
    const payload = {
        discountedPrice: null,
        oldPrice: null,
        discountedPercentage: null,
    }

    if(product != undefined) {
        payload.discountedPrice = product.price.discounted;
        payload.oldPrice = product.price.old;
        payload.discountedPercentage = calculateDiscountPercentage(product.price.discounted, product.price.old);
    } 

    return {
        type: types.PRODUCT_UPDATE,
        payload: payload
    }
}

/**
 * Calculate value between old and discounted price and return discount on percent.
 * @param {Number} discountPrice - $80
 * @param {Number} oldPrice - $100
 * @returns {Number} - will return 20 for this example
 */
function calculateDiscountPercentage( discountPrice, oldPrice) {
    const discount_percent = 100 - ( ( discountPrice / oldPrice ) * 100 );
    const discount = '' +  Math.round( discount_percent);
    return discount;
}