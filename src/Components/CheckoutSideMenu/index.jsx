import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProductDetail.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopContext } from '../../Context'
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

function CheckoutSideMenu() {

  const {
    order,
    setOrder,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setSearchByTitle
  } = useContext(ShopContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
  }

  const handleCheckout = ()=>{
    const newOrder = {
      date: "01.02.2024",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, newOrder]);
    setCartProducts([]);
    closeCheckoutSideMenu();
    setSearchByTitle('');
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-white border border-black rounded-lg`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl '>My Order</h2>
        <XMarkIcon
          className='w-6 h-6 cursor-pointer'
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className='flex flex-col overflow-y-auto w-full px-6 flex-1'>
        {
          cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id = {product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              handleDelete = {handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button 
            className='w-full py-2 bg-black text-white text-lg rounded-lg mb-6 mt-2'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu