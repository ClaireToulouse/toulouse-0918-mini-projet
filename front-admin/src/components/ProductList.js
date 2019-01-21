import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => 
  <ul>
      {
        products.map(product => 
          <li>
            <Product
              key={product.id}
              {...product}
            />
          </li>
        )
      }
  </ul>

export default ProductList;
