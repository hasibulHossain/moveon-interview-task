import React from 'react'
import PropTypes from 'prop-types';

function BreadCrumb({children}) {

  return (
    <ul className="breadcrumb">
      { children }
    </ul>
  )
}

BreadCrumb.prototype = {
  children: PropTypes.element.isRequired
}

export default BreadCrumb;