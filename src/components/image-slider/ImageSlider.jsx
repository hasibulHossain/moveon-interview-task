import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types';

import { toggleIsVariantSelected, updateSliderArr } from '../../redux/store/product';

import 'swiper/css'
import 'swiper/css/navigation'
import './image-slider.scss'

const ImageSlider = props => {
    const dispatch = useDispatch();
    const { images } = props;

    const [thumbsSwiper, setThumbsSwiper] = useState();
    const { isVariantColorSelected, selectedVariantColor, swiper} = useSelector(state => state.product.ui)

    function slideChangeHandler(_) {
        if(!isVariantColorSelected) return;

        const filteredImgArr = [...images];
        filteredImgArr.splice(0, selectedVariantColor.color.length);

        dispatch(updateSliderArr(filteredImgArr));

        const updatedSelectedVariant = {...selectedVariantColor};
        updatedSelectedVariant.color.splice(0, 1);

        dispatch(toggleIsVariantSelected({isVariantColorSelected: false, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
    }

    // Only call for initial render to set swiper instance to state.
    function swiperHandler(swiper) {
        dispatch(toggleIsVariantSelected({isVariantColorSelected: isVariantColorSelected, selectedVariantColor: selectedVariantColor, swiper: swiper}));
    }

    return <>
        <Swiper
            onSlideChange={slideChangeHandler}
            onSwiper={swiperHandler}
            loop={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: thumbsSwiper }}
            className='product-images-slider'
        >
            {
                images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.url} alt={item.title} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div style={{paddingTop: "2rem"}}>
            <Swiper
                width={200}
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation, Thumbs]}
                className='product-images-slider-thumbs'
            >
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="product-images-slider-thumbs-wrapper">
                                <img src={item.thumb} alt={item.title} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
}

ImageSlider.prototype = {
    images: PropTypes.array.isRequired,
}

export default React.memo(ImageSlider);