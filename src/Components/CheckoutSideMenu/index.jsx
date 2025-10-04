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
      {/* Mobile Overlay */}
      {isCheckoutSideMenuOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden'
          onClick={closeCheckoutSideMenu}
        />
      )}
      
      <aside className={`${isCheckoutSideMenuOpen ? 'flex animate-slide-in-right' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-white border-l border-gray-200 sm:border sm:border-black sm:rounded-l-lg shadow-2xl z-20`}>
        <div className='flex justify-between items-center p-4 sm:p-6 border-b border-gray-100'>
          <h2 className='font-medium text-lg sm:text-xl'>My Order</h2>
          <button
            className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
            onClick={closeCheckoutSideMenu}
            aria-label="Close cart"
          >
            <XMarkIcon className='w-6 h-6 cursor-pointer' />
          </button>
        </div>
        
        <div className='flex flex-col overflow-y-auto w-full px-4 sm:px-6 flex-1'>
          {cartProducts.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-gray-500'>
              <p className='text-lg mb-2'>Your cart is empty</p>
              <p className='text-sm'>Add some products to get started!</p>
            </div>
          ) : (
            cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
        
        {cartProducts.length > 0 && (
          <div className='px-4 sm:px-6 py-4 border-t border-gray-100 bg-gray-50'>
            <p className='flex justify-between items-center mb-4'>
              <span className='font-light text-sm sm:text-base'>Total:</span>
              <span className='font-medium text-xl sm:text-2xl'>${totalPrice(cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
              <button 
                className='w-full py-3 bg-black text-white text-base sm:text-lg rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium'
                onClick={() => handleCheckout()}
              >
                Checkout ({cartProducts.length} {cartProducts.length === 1 ? 'item' : 'items'})
              </button>
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

export default CheckoutSideMenu