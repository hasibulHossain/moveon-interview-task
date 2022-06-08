import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { variantNameEnum } from '../../common/enum';
import { toggleIsVariantSelected, updateProduct, updateSliderArr } from '../../redux/store/product';
import VariantPropertyItem from '../variant-property-item/VariantPropertyItem'
import "./variant-property-list.scss";
import { searchSelectedVariant } from '../../common/helpers/healper';


function VariantPropertyList(props) {
  const dispatch = useDispatch();

  const {variant} = props;
  const { name: variantName, values: variantItems} = variant;

  const [ selectedId, setSelectedId ] = useState();
  const [ selectedVariantItemName, setSelectedVariantItemName ] = useState("");
  const { gallery, skus } = useSelector(state => state.product.productDetails);
  const { swiper, selectedVariantColor, isVariantColorSelected } = useSelector(state => state.product.ui)

  const firstUpdate = useRef(true);
  const variantPropertyRef = useRef(null);
  const dependentOn = JSON.stringify(selectedVariantColor);

  /**
   * This function will call when click on any variant item
   * @sing V1.0.0
   * @param {object} variantItem - selected variant information
   * @param {string} variantType - variant type. ex: "Color" 
   */
  function variantItemClickHandler(variantItem, variantType) {
    setSelectedVariantItemName(variantItem.name);
    setSelectedId(variantItem.id);
    updateSlider(variantItem, variantType);

    // will remove "isSelected" class by dom manipulation 
    const isSelected = variantPropertyRef.current.firstChild.classList.contains("selected");
    if(isSelected) {
      variantPropertyRef.current.firstChild.classList.remove("selected");
    }
  }

  /**
   * this function will update product information according to selected variant
   * @since V1.0.0
   * @param {object} variantItem - selected variant information 
   * @param {string} variantType - selected variant type. ex: "Shoe size"
   */
  const updateSlider = (variantItem, variantType) => {
    if(variantType === variantNameEnum["Color"]) {
      const galleryCopy = [...gallery];
      
      if(selectedVariantColor.color.length === 1) {
        galleryCopy.splice(0, 1, variantItem);
        const updatedSelectedVariant = {...selectedVariantColor};
        updatedSelectedVariant.color[0] = variantItem;
  
        dispatch(toggleIsVariantSelected({isVariantColorSelected: true, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
      }
  
      if(selectedVariantColor.color.length === 0) {
        galleryCopy.splice(0, 0, variantItem);
  
        const updatedSelectedVariant = {...selectedVariantColor};
        updatedSelectedVariant.color[0] = variantItem;
  
        dispatch(toggleIsVariantSelected({isVariantColorSelected: true, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
      }
      
  
      dispatch(updateSliderArr(galleryCopy))
      
      if(swiper) {
        swiper.slideTo(0);
      }
    } else if( variantType === variantNameEnum['Shoe Size']) {
      updateSelectedVariantItem(variantItem, variantType);
    }
  }

  /**
   * @since V1.0.0
   * @param {object} selectedVariantItem 
   * @param {string} variantType 
   */
  const updateSelectedVariantItem = (selectedVariantItem, variantType) => {
    const updatedSelectedVariant = {...selectedVariantColor};
      
    if(variantType === variantNameEnum['Shoe Size']) {
      updatedSelectedVariant.size[0] = selectedVariantItem;
    }

    dispatch(toggleIsVariantSelected({isVariantColorSelected: isVariantColorSelected, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
  }

  // will add "selected" class for first variant item on initial render.
  useEffect(() => {
    setSelectedVariantItemName(variantItems[0].name);
    variantPropertyRef.current.firstChild.classList.add("selected");
  }, [])
  

  useEffect(() => {
    // This statement is for to prevent the initial render.
    // if (firstUpdate.current) {
    //   firstUpdate.current = false;
    //   return;
    // }

    const matchedSku = searchSelectedVariant(skus, selectedVariantColor);
    dispatch(updateProduct(matchedSku));

  }, [dependentOn]);
  
  return (
    <div className="product-details__property-box">
      <div className="product-details__property-title">
        <span>{variantName}: </span>
        <span>{selectedVariantItemName}</span>
      </div>
      <ul ref={el => variantPropertyRef.current = el} className="product-details__property-list">
        {
          variantItems.map((variantItem, i) => <VariantPropertyItem key={i} variantItem={variantItem} variantType={variantName} selectedId={selectedId} variantItemClickHandler={variantItemClickHandler} />)
        }
      </ul>
    </div>
  )
}

VariantPropertyList.prototype = {
  variant: PropTypes.object.isRequired,
}

export default VariantPropertyList