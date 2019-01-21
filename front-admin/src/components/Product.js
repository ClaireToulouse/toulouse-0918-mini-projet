import React from 'react';

const Product = ({ imageurl, label }) =>
  <li>
    <a href={imageurl}>{label}</a> 
  </li>

export default Product;
