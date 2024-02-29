/* eslint-disable react/prop-types */
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function OrdersCard({
  totalProducts,
  totalPrice
}) {

  return (
    <div >
      <p className='flex justify-between items-center mb-3 rounded-lg border border-black w-80 px-4 py-6'>
        <span>{totalProducts} Products</span>
        <span>${totalPrice}</span>
        <span>01.02.23</span>
        <ChevronRightIcon className='w-4 h-4'/>
      </p>
    </div>
  )
}

export default OrdersCard