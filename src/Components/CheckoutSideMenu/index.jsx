import { useContext } from 'react'
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
    <>
      {/* Enhanced Mobile Overlay */}
      {isCheckoutSideMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-10 sm:hidden'
          onClick={closeCheckoutSideMenu}
        />
      )}
      
      <aside className={`${isCheckoutSideMenuOpen ? 'flex animate-slide-in-right' : 'hidden'} checkout-side-menu flex-col fixed right-0 glass-effect sm:border-2 sm:border-gray-100 sm:rounded-l-2xl shadow-2xl z-20`}>
        {/* Modern Header */}
        <div className='flex justify-between items-center p-6 border-b border-gray-100/50'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
              <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5A1 1 0 006 19h10a1 1 0 001-1v-1M7 13v6a1 1 0 001 1h4a1 1 0 001-1v-6' />
              </svg>
            </div>
            <div>
              <h2 className='font-bold text-xl text-gray-900'>Shopping Cart</h2>
              <p className='text-sm text-gray-500'>
                {cartProducts.length} {cartProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            className='p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105'
            onClick={closeCheckoutSideMenu}
            aria-label="Close cart"
          >
            <XMarkIcon className='w-5 h-5 text-gray-600' />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className='flex flex-col overflow-y-auto w-full px-6 flex-1 py-4'>
          {cartProducts.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-gray-500 py-12'>
              <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6'>
                <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-700'>Your cart is empty</h3>
              <p className='text-gray-500 text-center max-w-xs'>
                Discover amazing products and add them to your cart to get started!
              </p>
            </div>
          ) : (
            <div className='space-y-4'>
              {cartProducts.map((product) => (
                <OrderCard
                  key={product.id}
                  id={product.id}
                  imageUrl={product.image}
                  title={product.title}
                  price={product.price}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Modern Checkout Footer */}
        {cartProducts.length > 0 && (
          <div className='p-6 border-t border-gray-100/50 bg-gradient-to-br from-gray-50 to-white space-y-4'>
            {/* Total Section */}
            <div className='card-modern p-4 bg-white'>
              <div className='flex justify-between items-center'>
                <div>
                  <span className='text-sm text-gray-600'>Total Amount</span>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='text-2xl font-bold text-gray-900'>${totalPrice(cartProducts)}</span>
                    <span className='text-sm text-gray-500'>USD</span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-xs text-gray-500'>
                    {cartProducts.length} {cartProducts.length === 1 ? 'item' : 'items'}
                  </div>
                  <div className='text-xs text-green-600 font-medium mt-1'>
                    Free shipping included
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checkout Button */}
            <Link to='/my-orders/last' className='block'>
              <button 
                className='btn-primary w-full py-4 text-lg flex items-center justify-center gap-2'
                onClick={() => handleCheckout()}
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

export default CheckoutSideMenu