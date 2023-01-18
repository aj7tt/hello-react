import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  console.log(props);
  
  if (!props.product) return <div>Loading...</div>;
  return props.product.map((product, i) => {
    return <Product product={product} key={i} />;
  });
}
