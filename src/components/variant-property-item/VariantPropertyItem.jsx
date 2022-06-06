import React from 'react'
import PropTypes from 'prop-types';
import { variantNameEnum } from '../../common/enum';

import "./variant-property-item.scss"

function VariantPropertyItem(props) {
  const { variantItem, variantType, selectedId, variantItemClickHandler } = props;

  if(variantNameEnum["Color"] == variantType) {
    return (
      <li onClick={() => variantItemClickHandler(variantItem, variantType)} className={variantItem.id == selectedId ? "property-list-item selected" : "property-list-item"}>
        <div className="property-image">
          <img src={variantItem.thumb} alt={variantItem.title} />
        </div>
      </li>
    )
  }

  if(variantNameEnum['Shoe Size'] == variantType) {
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

VariantPropertyItem.prototype = {
  variantItem: PropTypes.object.isRequired,
  variantType: PropTypes.string.isRequired,
  selectedId: PropTypes.number.isRequired,
  variantItemClickHandler: PropTypes.func.isRequired
}

export default VariantPropertyItem;

