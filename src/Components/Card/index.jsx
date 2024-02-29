/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../../Context'
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const AddIconButton = ({isInCart, onItemAdded}) => {
  if (isInCart) {
    return (
      <CheckCircleIcon
        className='absolute top-0 right-0 w-6 m-2 text-green-300'
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    )
  } else {
    return (
      <PlusCircleIcon
        className='absolute top-0 right-0 w-6 m-2 text-blue-300'
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
      className='bg-white cursor-pointer w-56 h-60'
      onClick={() => {
        showProductDetails(data)
      }}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image } />
        <AddIconButton isInCart={isInCart} onItemAdded={addProductToCart}/>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card