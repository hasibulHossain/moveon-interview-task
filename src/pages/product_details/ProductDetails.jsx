import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../redux/store/product';

import VariantPropertyList from '../../components/variant-property-list/VariantPropertyList';
import ImageSlider from '../../components/image-slider/ImageSlider'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BreadCrumbItem from '../../components/breadcrumb-item/BreadCrumbItem';
import './product_details.scss'


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
        <div className="related-categories">
          <div>
            Related categories
          </div>
          <BreadCrumb>
            <BreadCrumbItem>Home</BreadCrumbItem>
            <BreadCrumbItem>Bags & Wallet</BreadCrumbItem>
            <BreadCrumbItem>Leather</BreadCrumbItem>
          </BreadCrumb>
        </div>

        {/* product details section */}
        <div className="product-details">

          {/* Image slider */}
          <div className="product-details__gallery box-shadow">
            <ImageSlider images={gallery} />
          </div>

          {/* full Product information */}
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