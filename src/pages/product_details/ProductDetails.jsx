import React, { useEffect } from 'react';
import ImageSlider from '../../components/image-slider/ImageSlider'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './product_details.scss'
import VariantPropertyList from '../../components/variant-property-list/VariantPropertyList';
import { fetchProductDetails } from '../../redux/store/product';


function ProductDetails() {
  const { gallery, variants } = useSelector(state => state.product.productDetails);
  const { oldPrice, discountedPrice, discountedPercentage, title } = useSelector(state => state.product);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [])
  
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
            <li className="breadcrumb-item"><a href="#"><span>Bags, Wallets...</span> <span>{">"} </span></a></li>
            <li className="breadcrumb-item"><a href="#"><span>Bags & Backp...</span> <span>{">"} </span></a></li>
            <li className="breadcrumb-item"><a href="#"><span>Laptop Bags</span> <span>{">"} </span></a></li>
          </ul>
        </div>
        {/* product details section */}
        <div className="product-details">
          {/* flex left side */}
          <div className="product-details__gallery box-shadow">
            <ImageSlider images={gallery} />
          </div>

          {/* flex right side */}
          <div className="product-details__info">
            <div className="product-details__title">
              <p>{title}</p>
            </div>

            <div className="product-details__price-box">
              <span>price: </span>
              <span className="discounted-price">Rs. {discountedPrice}</span>
              <span className="old-price">Rs. {oldPrice}</span>
              <span className="discounted-percentage">({discountedPercentage}%  OFF)</span>
            </div>

            {
              variants.map((variant, i) => {
                return <VariantPropertyList key={i} variant={variant} />
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;