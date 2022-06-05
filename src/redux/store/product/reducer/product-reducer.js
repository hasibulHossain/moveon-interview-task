import * as actions from '../types';
  
function product(state = initialState, { type, payload }) {
    switch (type) {
        case actions.PRODUCT_LOADING:
            return {
                ...state,
                test: payload
            };

        case actions.PRODUCT_UPDATE:
            return {
                ...state,
                discountedPrice: payload.discountedPrice,
                oldPrice: payload.oldPrice,
                discountedPercentage: payload.discountedPercentage,
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
    skus: [
        {
            "id": 12000028392067142,
            "price": { "discounted": 21.41, "old": 38.22 },
            "props": [691, 100010487],
            "stock": 290
          },
          {
            "id": 12000028392067140,
            "price": { "discounted": 22.41, "old": 58.22 },
            "props": [691, 200000337],
            "stock": 290
          },
          {
            "id": 12000028392067141,
            "price": { "discounted": 24.41, "old": 38.22 },
            "props": [691, 200000338],
            "stock": 290
          },
          {
            "id": 12000028392067138,
            "price": { "discounted": 21.47, "old": 38.72 },
            "props": [691, 100013888],
            "stock": 290
          },
          {
            "id": 12000028392067139,
            "price": { "discounted": 29.41, "old": 39.22 },
            "props": [691, 100010483],
            "stock": 290
          },
          {
            "id": 12000028392067136,
            "price": { "discounted": 24.41, "old": 33.22 },
            "props": [771, 100010487],
            "stock": 290
          },
          {
            "id": 12000028392067137,
            "price": { "discounted": 22.41, "old": 38.28 },
            "props": [691, 200000364],
            "stock": 290
          },
          {
            "id": 12000028392067134,
            "price": { "discounted": 26.41, "old": 54.22 },
            "props": [771, 200000337],
            "stock": 290
          },
          {
            "id": 12000028392067135,
            "price": { "discounted": 23.41, "old": 57.22 },
            "props": [771, 200000338],
            "stock": 290
          },
    ],
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
      {
        id:200000124,
        name:"Shoe Size",
        values:[
        {
        id:200000364,
        name:"39",
        color:null,
        image:null,
        thumb:null,
        title:"39"
        },
        {
        id:100013888,
        name:"40",
        color:null,
        image:null,
        thumb:null,
        title:"40"
        },
        {
        id:100010483,
        name:"41",
        color:null,
        image:null,
        thumb:null,
        title:"41"
        },
        ]
        }
    ]
};


const initialState = {
    isLoading: false,
    isFetched: false,
    error: false,
    test: "",
    id: null,
    discountedPrice: 25,
    oldPrice: 30,
    discountedPercentage: 30,
    productDetails: {
        id: null,
        mainImage: "",
        gallery: [...mockData.gallery],
        ratingCount: null,
        ratingAverage: null,
        skus: [...mockData.skus],
        variants: [...mockData.props]
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


export default product;