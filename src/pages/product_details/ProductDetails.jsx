import React from 'react'
import ImageSlider from '../../components/image-slider/ImageSlider'
import { useSelector } from 'react-redux';
import './product_details.scss'
import VariantPropertyList from '../../components/variant-property-list/VariantPropertyList';


function ProductDetails() {
  const { gallery, variants } = useSelector(state => state.product.productDetails);

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
          <div className="product-details__gallery box-shadow">
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

            {
              variants.map((variant, i) => {
                return <VariantPropertyList key={i} variant={variant} />
              })
            }


            {/* <div className="product-details__property-box">
              <div className="product-details__property-title">
                <span>Color: </span>
                <span>Black</span>
              </div>
              <ul className="product-details__property-list">
                <li onClick={() => onbtnclick(variant[0].values[1])} className="property-list-item selected"><div className="property-image"><img src={variant[0].values[1].thumb} alt="" /></div></li>
                <li onClick={() => onbtnclick(variant[0].values[0])} className="property-list-item"><div className="property-image"><img src={variant[0].values[0].thumb} alt="" /></div></li>
              </ul>
            </div> */}

            {/* <div className="product-details__property-box">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;