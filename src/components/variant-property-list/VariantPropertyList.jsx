import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsVariantSelected, updateProduct, updateSliderArr } from '../../redux/store/product';
import VariantPropertyItem from '../variant-property-item/VariantPropertyItem'
import "./variant-property-list.scss";

const propEnum = {
  "Color": "Color",
  "Shoe Size": "Shoe Size"
}


function VariantPropertyList(props) {
  const dispatch = useDispatch();
  const {variant} = props;
  const { gallery, skus } = useSelector(state => state.product.productDetails);
  const { swiper, selectedVariantColor, isVariantColorSelected } = useSelector(state => state.product.ui)

  const [ selectedId, setSelectedId ] = useState();
  const [ selectedVariantItemName, setSelectedVariantItemName ] = useState("");
  const { name: variantName, values: variantItems} = variant;

  const firstUpdate = useRef(true);
  const variantPropertyRef = useRef(null);
  
  function variantItemClickHandler(variantItem, variantType) {
    setSelectedVariantItemName(variantItem.name);
    setSelectedId(variantItem.id);
    updateSlider(variantItem, variantType);

    const isSelected = variantPropertyRef.current.firstChild.classList.contains("selected");
    if(isSelected) {
      variantPropertyRef.current.firstChild.classList.remove("selected");
    }
  }


  const updateSlider = (variantItem, variantType) => {
    if(variantType === propEnum["Color"]) {
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
    } else if( variantType === propEnum['Shoe Size']) {
      updateSelectedVariantItem(variantItem, variantType);
    }
  }

  const updateSelectedVariantItem = (selectedVariantItem, variantType) => {
    const updatedSelectedVariant = {...selectedVariantColor};

    // variant type could be 'size', 'ram', 'storage'
    // switch (variantType) {
    //   case propEnum['Shoe Size']:
    //     updatedSelectedVariant.size[0] = selectedVariantItem;
    //     break;
    //   }
      
    if(variantType === propEnum['Shoe Size']) {
      updatedSelectedVariant.size[0] = selectedVariantItem;
    }



    dispatch(toggleIsVariantSelected({isVariantColorSelected: isVariantColorSelected, selectedVariantColor: updatedSelectedVariant, swiper: swiper}));
  }

  useEffect(() => {
    variantPropertyRef.current.firstChild.classList.add("selected");
  }, [])
  


  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const matchedSku = skus.find(sku => {
      if(selectedVariantColor.color.length > 0 && selectedVariantColor.size.length > 0) {
        return sku.props[0] === selectedVariantColor.color[0].id && sku.props[1] === selectedVariantColor.size[0].id;
      }

      if(selectedVariantColor.color.length > 0) return sku.props[0] === selectedVariantColor.color[0].id;
      if(selectedVariantColor.size.length > 0) return sku.props[1] === selectedVariantColor.size[0].id;

    });

    dispatch(updateProduct(matchedSku));
  }, [JSON.stringify(selectedVariantColor)]);
  


  
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

export default VariantPropertyList