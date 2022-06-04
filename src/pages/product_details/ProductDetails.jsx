import React, { useEffect } from 'react'
import ImageSlider from '../../components/image-slider/ImageSlider'
import { useSelector, useDispatch } from 'react-redux';
import './product_details.scss'
import { toggleIsVariantSelected, updateSliderArr } from '../../redux/store/product';


function ProductDetails() {
  const { gallery, variant } = useSelector(state => state.product.productDetails);
  const { selectedVariantColor, swiper} = useSelector(state => state.product.ui)


  const dispatch = useDispatch();

  useEffect(() => {
  }, [gallery.length])

  const onbtnclick = () => {
    const variantImage = [...gallery];
    
    // TODO: need to create action for variant color select
    variantImage.splice(0, 0, variant[0].values[1]);
    
    // TODO: need to create action for setImages for update gallery
    // setImages(variantImage);
    dispatch(updateSliderArr(variantImage));
    dispatch(toggleIsVariantSelected({isVariantColorSelected: true, selectedVariantColor: selectedVariantColor, swiper: swiper}));
    
    swiper.slideTo(0);
  }

  
  const cb = ({filteredImgArr}) => {
    // TODO: need to create action for setImages for update gallery
    // setImages(filteredImgArr);
  }
  

  return (
    <section className="product-details-section">
      <div className="row">
        {/* related category section */}
        <div className="related-categories">
          <div>
            Related categories
          </div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="#"><span>home</span> <span>{">"} </span></a></li>
            <li className="breadcrumb-item"><a href="#"><span>home</span> <span>{">"} </span></a></li>
            <li className="breadcrumb-item"><a href="#"><span>home</span> <span>{">"} </span></a></li>
            <li className="breadcrumb-item"><a href="#"><span>home</span> <span>{">"} </span></a></li>
            <li className="breadcrumb-item"><a href="#"><span>home</span> <span>{">"} </span></a></li>
          </ul>
        </div>
        {/* product details section */}
        <div className="product-details">
          {/* flex left side */}
          <div className="product-details__gallery">
            <ImageSlider images={gallery} />
          </div>

          {/* flex right side */}
          <div className="product-details__info">
            <div className="product-details__title">
              <p>Product title</p>
            </div>

            <div className="product-details__price-box">
              <span>price</span>
              <span className="discounted-price">Rs. 2499</span>
              <span className="old-price">Rs. 4999</span>
              <span className="discounted-percentage">(50%  OFF)</span>
            </div>

            <ul className="product-details__property-list">
              <li onClick={onbtnclick} className="property-list-item"><div className="property-image"><img src={variant[0].values[1].thumb} alt="" /></div></li>
              <li className="property-list-item"><div className="property-image"><img src="" alt="" /></div></li>
            </ul>

            <ul className="product-details__property-list">
              <li className="property-list-item"><div className="property-text"><span>14</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
              <li className="property-list-item"><div className="property-text"><span>20</span></div></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;