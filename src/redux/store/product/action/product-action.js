import axios from 'axios';
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


const propEnum = {
    "Color": "Color",
    "Shoe Size": "Shoe Size"
  }
  


// * @return void Dispatch `GET_SINGLE_PRODUCT_DETAILS`
// */
export const fetchProductDetails = () => async (dispatch) => {
   try {
       const url = "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product";

       dispatch({type: types.PRODUCT_LOADING_INPROGRESS, payload: {loading: true}});

       const res = await axios.get(url);

       const colorVariations = res.data.variation.props.filter(item => item.name === propEnum.Color);
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
    } catch (error) {
       dispatch({type: types.PRODUCT_LOADING_FAILED, payload: {error: true, loading: false}});
   }
};




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
        payload.discountedPercentage = calculateDiscountPercentage(product.price.discounted, product.price.old);
    } 

    return {
        type: types.PRODUCT_UPDATE,
        payload: payload
    }
}

function calculateDiscountPercentage( discountPrice, oldPrice) {
    const discount_percent = 100 - ( ( discountPrice / oldPrice ) * 100 );
    const discount = '' +  Math.round( discount_percent);
    return discount;
}