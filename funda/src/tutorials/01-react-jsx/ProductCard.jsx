import React from 'react'

const ProductCard = () => {
  const productName = "Wireless Headphones";
  const productDescription = "High-quality wireless headphones with noise cancellation and 20-hour battery life.";
  const productPrice = 99.99;
  return (
    <div className="product-cart">
      <h3>{productName}</h3>
      <p>{productDescription}</p>
      <p>{productPrice}</p>
      <button type = "button" onClick={()=> alert('Added to card')}>Add to Cart</button>

    </div>
 )
}

export default ProductCard;