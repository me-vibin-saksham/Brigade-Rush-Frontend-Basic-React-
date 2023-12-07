import React from 'react';
import Customerreview from '../../components/CustomerReview';
import Contactus from '../../components/contactus';
import Herovideo from '../../components/HeroVideo';
import SHOPfooter from '../../components/shopFooter';
import ProductSection from '../../components/products';

const ShopPage = () => {
  console.log('ShopPage rendered');
  return (
    <div>
    <Herovideo />
    <ProductSection />
    <Customerreview />
    <Contactus /> 
    <SHOPfooter />
    </div>
  );
}

export default ShopPage;