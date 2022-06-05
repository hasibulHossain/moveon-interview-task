import React, { useEffect } from 'react'
import ImageSlider from '../../components/image-slider/ImageSlider'
import { useSelector, useDispatch } from 'react-redux';
import './product_details.scss'
import { toggleIsVariantSelected, updateSliderArr } from '../../redux/store/product';


function ProductDetails() {
  const { gallery, variant } = useSelector(state => state.product.productDetails);
  const { selectedVariantColor, swiper} = useSelector(state => state.product.ui)


  const dispatch = useDispatch();

  const onbtnclick = (selectedVariantImg) => {
    const galleryCopy = [...gallery];
    
    if(selectedVariantColor.length === 1) {
      galleryCopy.splice(0, 1, selectedVariantImg);
      const updatedSelectedVariant = [...selectedVariantColor];
      updatedSelectedVariant[0] = selectedVariantImg;

      dispatch(toggleIsVariantSelected({isVariantColorSelected: true, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
      
    }

    if(selectedVariantColor.length === 0) {
      galleryCopy.splice(0, 0, selectedVariantImg);

      const updatedSelectedVariant = [...selectedVariantColor];
      updatedSelectedVariant[0] = selectedVariantImg;

      dispatch(toggleIsVariantSelected({isVariantColorSelected: true, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
    }
    

    dispatch(updateSliderArr(galleryCopy))
    
    if(swiper) {
      swiper.slideTo(0);
    }
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
              <span>price: </span>
              <span className="discounted-price">Rs. 2499</span>
              <span className="old-price">Rs. 4999</span>
              <span className="discounted-percentage">(50%  OFF)</span>
            </div>

            <div className="product-details__property-box">
              <div className="product-details__property-title">
                <span>Color: </span>
                <span>Black</span>
              </div>
              <ul className="product-details__property-list">
                <li onClick={() => onbtnclick(variant[0].values[1])} className="property-list-item selected"><div className="property-image"><img src={variant[0].values[1].thumb} alt="" /></div></li>
                <li onClick={() => onbtnclick(variant[0].values[0])} className="property-list-item"><div className="property-image"><img src={variant[0].values[0].thumb} alt="" /></div></li>
              </ul>
            </div>

            <div className="product-details__property-box">
              <div className="product-details__property-title">
                <span>Size: </span>
                <span>23</span>
              </div>
              <ul className="product-details__property-list">
                <li className="property-list-item selected"><div className="property-text"><span>14</span></div></li>
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
      </div>
    </section>
  )
}

export default ProductDetails;