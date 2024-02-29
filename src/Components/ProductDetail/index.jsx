import React, { useContext } from 'react'
import './ProductDetail.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopContext } from '../../Context'

function ProductDetail() {

  const {
    isProductDetailOpen,
    closeProductDetail,
    productDetails
  } = useContext(ShopContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} p-6 product-detail flex-col fixed right-0 bg-white border border-black rounded-lg`}>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-medium text-xl '>Detail</h2>
        <XMarkIcon 
          className='w-6 h-6 cursor-pointer'
          onClick={closeProductDetail}
        />
      </div>
      <div className='flex flex-col overflow-y-auto'>
        <figure >
          <img 
            src={productDetails.image} alt=""
            className='w-full h-full rounded-lg'
          />
        </figure>
        <p className='flex flex-col mt-4'>
          <span className='font-medium text-2xl mb-2'>${productDetails.price}</span>
          <span className='font-medium text-md mb-2'>{productDetails.title}</span>
          <span className='font-medium text-sm'>{productDetails.description}</span>
        </p>
      </div>

    </aside>
  )
}

export default ProductDetail;