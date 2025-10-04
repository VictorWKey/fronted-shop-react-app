/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../../Context'
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const AddIconButton = ({isInCart, onItemAdded}) => {
  if (isInCart) {
    return (
      <CheckCircleIcon
        className='absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 text-green-500 bg-white rounded-full shadow-md'
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    )
  } else {
    return (
      <PlusCircleIcon
        className='absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 text-blue-500 bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors duration-200'
        onClick={onItemAdded}
      />
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
      className='bg-white cursor-pointer w-full max-w-sm h-60 sm:h-72 md:h-64 lg:h-72 xl:h-80 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden'
      onClick={() => {
        showProductDetails(data)
      }}
    >
      <figure className='relative mb-2 w-full h-3/4 sm:h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 backdrop-blur-sm rounded-lg text-black text-xs m-2 px-2 py-1 shadow-sm'>
          {data.category}
        </span>
        <img 
          className='w-full h-full object-cover rounded-t-lg' 
          src={data.image} 
          alt={data.title}
          loading="lazy"
        />
        <AddIconButton isInCart={isInCart} onItemAdded={addProductToCart}/>
      </figure>
      <div className='px-3 pb-3 h-1/4 sm:h-1/5 flex flex-col justify-between'>
        <p className='flex justify-between items-start gap-2'>
          <span className='text-xs sm:text-sm font-light truncate flex-1 leading-tight'>
            {data.title}
          </span>
          <span className='text-sm sm:text-lg font-medium text-right whitespace-nowrap'>
            ${data.price}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card