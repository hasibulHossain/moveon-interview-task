import React from 'react'
import PropTypes from 'prop-types';

function BreadCrumbItem({name, href, children}) {

    const breadCrumbItemName = name || children;
  return (
    <li className="breadcrumb-item">
        <a href={href}>
            <span>{breadCrumbItemName}</span> <span>{">"} </span>
        </a>
    </li>
  )
}

BreadCrumbItem.prototype = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default BreadCrumbItem