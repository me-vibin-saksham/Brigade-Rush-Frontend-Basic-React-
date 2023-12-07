import React, { useContext, useState } from 'react';
import { PRODUCTS } from '../Products'
import { ShopContext } from '../context/shop-context';
import Product_card from './product_card'


const ProductSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const {addToCart} = useContext(ShopContext)
    const titleStyle = {
      textAlign: 'center',
      color: 'black',
      textDecoration: isHovered ? 'underline yellow' : 'none',
      transition: 'text-decoration 0.3s', // Add a smooth transition effect
    };
    
  return (
    <div>
<section>
<h1
      style={titleStyle}
      className="mb-4 mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:gray-900"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      Begin Your Adventure
    </h1>

</section>





<section>
    <div className='grid gap-2 md:gap-3 lg:gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {" "}
        {PRODUCTS.map((product) => (
          <Product_card data={product} />
        ))}
    </div>

</section>
      
    </div>
  )
}

export default ProductSection
