import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsVariantSelected, updateSliderArr } from '../../redux/store/product';
import VariantPropertyItem from '../variant-property-item/VariantPropertyItem'
import "./variant-property-list.scss"

function VariantPropertyList(props) {
  const dispatch = useDispatch();
  const {variant} = props;
  const { gallery } = useSelector(state => state.product.productDetails);
  const { swiper, selectedVariantColor } = useSelector(state => state.product.ui)

  const [ selectedId, setSelectedId ] = useState();
  const [ selectedVariantItemName, setSelectedVariantItemName ] = useState("");
  const { name: variantName, values: variantItems} = variant;
  
  function variantItemClickHandler(variantItem) {
    setSelectedVariantItemName(variantItem.name);
    setSelectedId(variantItem.id);
    updateSlider(variantItem);
  }

  const updateSlider = (selectedVariantImg) => {
    if(selectedVariantImg["color"] == null) return;

    console.log('from updateslider', selectedVariantColor)

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

  
  return (
    <div className="product-details__property-box">
      <div className="product-details__property-title">
        <span>{variantName}: </span>
        <span>{selectedVariantItemName}</span>
      </div>
      <ul className="product-details__property-list">
        {
          variantItems.map((variantItem, i) => <VariantPropertyItem key={i} variantItem={variantItem} variantType={variantName} selectedId={selectedId} variantItemClickHandler={variantItemClickHandler} />)
        }
      </ul>
    </div>
  )
}

export default VariantPropertyList