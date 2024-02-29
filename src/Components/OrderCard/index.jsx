/* eslint-disable react/prop-types */
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

function OrderCard({
  id,
  imageUrl,
  title,
  price,
  handleDelete
}) {
  return (
    <div className='flex justify-between items-center w-full bg-gray-100 p-3 mb-3 rounded-lg'>
      <div className='flex gap-2 items-center'>
        <figure className='h-16 w-16'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt="" />
        </figure>
        <p className='text-sm font-light w-32'>{title}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <p className='text-sm font-medium'>${price}</p>
        {handleDelete
          ?
        <XMarkIcon
          className='h-4 w-4 cursor-pointer'
          onClick={() => handleDelete(id)}
        />
          :
        undefined}
      </div>
    </div>
  )
}

export default OrderCard