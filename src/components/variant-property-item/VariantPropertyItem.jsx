import React, { useState } from 'react'
import "./variant-property-item.scss"

// enum
const propEnum = {
  "Color": "Color",
  "Shoe Size": "Shoe Size"
}

function VariantPropertyItem(props) {
  const { variantItem, variantType, selectedId, variantItemClickHandler } = props;

  // props.isSelected ? 'selected' : '' //classname

  if(propEnum['Color'] == variantType) {
    return (
      <li onClick={() => variantItemClickHandler(variantItem, variantType)} className={variantItem.id == selectedId ? "property-list-item selected" : "property-list-item"}>
        <div className="property-image">
          <img src={variantItem.thumb} alt={variantItem.title} />
        </div>
      </li>
    )
  }

  if(propEnum['Shoe Size'] == variantType) {
    return (
      <li onClick={() => variantItemClickHandler(variantItem, variantType)} className={variantItem.id == selectedId ? "property-list-item selected" : "property-list-item"}>
        <div className="property-text">
          <span>{variantItem.name}</span>
        </div>
      </li>
    )
  }

  return null;
}


{/* <li className="property-list-item selected"><div className="property-text"><span>14</span></div></li>

<li onClick={() => onbtnclick(variant[0].values[1])} className="property-list-item selected"><div className="property-image"><img src={variant[0].values[1].thumb} alt="" /></div></li> */}

export default VariantPropertyItem;











// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render
// nedd to use useRef for select variant on first render