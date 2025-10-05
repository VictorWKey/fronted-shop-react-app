/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../../Context'
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const AddIconButton = ({isInCart, onItemAdded}) => {
  if (isInCart) {
    return (
      <div className='absolute top-3 right-3 p-1.5 bg-green-50 rounded-full shadow-lg border border-green-100'>
        <CheckCircleIcon
          className='w-5 h-5 text-green-600'
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </div>
    )
  } else {
    return (
      <button 
        className='absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-lg border border-gray-100 
                   hover:bg-blue-50 hover:border-blue-200 hover:shadow-xl hover:scale-110
                   transition-all duration-200 group'
        onClick={onItemAdded}
      >
        <PlusCircleIcon
          className='w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200'
        />
      </button>
    )
  }
}

function Card({data}) {

  const {
    openProductDetail,
    closeProductDetail,
    setProductDetails,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  }= useContext(ShopContext);

  const showProductDetails = (product) => {
    closeCheckoutSideMenu();
    openProductDetail();
    setProductDetails(product);
  }

  const addProductToCart = (event) => {
    event.stopPropagation();
    setCartProducts([...cartProducts, data]);
    closeProductDetail();
    openCheckoutSideMenu();
  }

  const isInCart = cartProducts.filter(product => product.id == data.id).length > 0;

  return (
    <div
      className='card-product cursor-pointer w-full max-w-sm h-80 sm:h-96 md:h-80 lg:h-96 xl:h-[400px] group'
      onClick={() => {
        showProductDetails(data)
      }}
    >
      <figure className='relative w-full h-3/4 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-4'>
        {/* Category Tag */}
        <div className='absolute top-3 left-3 z-10'>
          <span className='category-tag backdrop-blur-sm'>
            {data.category}
          </span>
        </div>
        
        {/* Product Image Container */}
        <div className='w-full h-full flex items-center justify-center'>
          <img 
            className='max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110' 
            src={data.image} 
            alt={data.title}
            loading="lazy"
          />
        </div>
        
        {/* Gradient Overlay on Hover */}
        <div className='gradient-overlay' />
        
        {/* Add Button */}
        <AddIconButton isInCart={isInCart} onItemAdded={addProductToCart}/>
      </figure>
      
      {/* Product Info */}
      <div className='p-4 h-1/4 flex flex-col justify-between'>
        <div className='space-y-2 flex-1'>
          <h3 className='product-title text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-200'>
            {data.title}
          </h3>
        </div>
        
        <div className='flex items-center justify-between pt-2'>
          <div className='price-display text-lg sm:text-xl'>
            ${data.price}
          </div>
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            <span className='text-xs text-gray-500 font-medium'>View Details</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card