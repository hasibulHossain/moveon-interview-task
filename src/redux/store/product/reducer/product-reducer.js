import * as actions from '../types';
  
function product(state = initialState, { type, payload }) {
    switch (type) {
        case actions.PRODUCT_LOADING:
            return {
                ...state,
                test: payload
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
                    swiper: payload.swiper,
                    isVariantColorSelected: payload.isVariantColorSelected,
                    selectedVariantColor: payload.selectedVariantColor,
                }
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


let mockData = {
    gallery: [
        {
          url: "https://ae01.alicdn.com/kf/S7e556daed6ec45e5b605cc8a024badf0d/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg",
          thumb: "https://ae01.alicdn.com/kf/S7e556daed6ec45e5b605cc8a024badf0d/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg",
          title: null
        },
        {
          url: "https://ae01.alicdn.com/kf/Sf162208134bd4f7ca98013e1beb50b80J/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg",
          thumb: "https://ae01.alicdn.com/kf/Sf162208134bd4f7ca98013e1beb50b80J/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg",
          title: null
        },
        {
          url: "https://ae01.alicdn.com/kf/S61db37a0f0f445c58a2ea47c523bbe7cW/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg",
          thumb: "https://ae01.alicdn.com/kf/S61db37a0f0f445c58a2ea47c523bbe7cW/ 2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg",
          title: null
        }
      ],
      props: [{
        id: 14,
        name: "Color",
        values: [
          {
            id: 771,
            name: "Beige",
            color: "#F8F7E7",
            url: "https://ae01.alicdn.com/kf/S5d242b090abb48299274f75f0822b703i/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_640x640.jpg",
            thumb: "https://ae01.alicdn.com/kf/S5d242b090abb48299274f75f0822b703i/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg",
            title: "Black"
          },
          {
            id: 691,
            name: "Gray",
            color: "#999",
            url: "https://ae01.alicdn.com/kf/S6f7e4e8aecbd4f34bba78b9319e7b05ao/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_640x640.jpg",
            thumb: "https://ae01.alicdn.com/kf/S6f7e4e8aecbd4f34bba78b9319e7b05ao/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg",
            title: "Gray"
          }
        ]
      },
    ]
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
    productDetails: {
        id: null,
        mainImage: "",
        gallery: [...mockData.gallery],
        ratingCount: null,
        ratingAverage: null,
        skus: [],
        variant: [...mockData.props]
    },
    ui: {
        swiper: null,
        isVariantColorSelected: false,
        selectedVariantColor: null,
    }
};

export default product;