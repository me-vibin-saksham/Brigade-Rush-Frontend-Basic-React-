import React from 'react';
import ShopContextProvider from './context/shop-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShopPage from './pages/shop/shop';
import DescriptionPage from './pages/description/description';
import CartPage from './pages/cart/cart';
import AccountPage from './pages/account/account';
import SignUp from './pages/account/account2';
import Footer from './components/footer';


function App() {
  return (
    <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path='/signUp' element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
    </ShopContextProvider>
  );
}

export default App;