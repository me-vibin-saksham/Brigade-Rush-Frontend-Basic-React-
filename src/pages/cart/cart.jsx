import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../Products';
import CartItem from '../../components/cart_item';
import {useNavigate} from 'react-router-dom'

const CartPage = () => {
    console.log('Cart rendered');
    const { cartItems, getTotalCartAmount, removeFromCart } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const Navigate =useNavigate();
  return (
    <div>
    <div className=" bg-gray-100 pt-20 pb-5">
      <h1 className=" text-center text-2xl font-bold">Your Adventure Cart</h1>
    </div>

    <div className="cart">
    {PRODUCTS.map((product) => {
  if (cartItems[product.id] !== 0) {
    return <CartItem key={product.id} data={product} />;
  }
})}
      </div>











      <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>${totalAmount}.00</dd>
              </div>

              <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>$5.50</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-$0.00</dd>
              </div>

              <div className="flex justify-between text-base font-medium">
                <dt>Total</dt>
                <dd>${totalAmount+5}.50</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                <p className="whitespace-nowrap text-xs">No Coupons Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <button onClick={()=>Navigate("/")} className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                Go To Shop
              </button>
              <button className="ml-4 block rounded bg-blue-600 px-5 py-3 text-sm text-gray-100 transition hover:bg-blue-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>


  );
}

export default CartPage;