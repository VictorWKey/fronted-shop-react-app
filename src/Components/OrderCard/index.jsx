/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid';

function OrderCard({
  id,
  imageUrl,
  title,
  price,
  handleDelete
}) {
  return (
    <div className='flex justify-between items-center w-full bg-gray-50 hover:bg-gray-100 p-3 mb-3 rounded-lg transition-colors duration-200'>
      <div className='flex gap-3 items-center flex-1 min-w-0'>
        <figure className='h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0'>
          <img 
            className='w-full h-full rounded-lg object-cover' 
            src={imageUrl} 
            alt={title}
            loading="lazy"
          />
        </figure>
        <p className='text-xs sm:text-sm font-light flex-1 truncate pr-2 leading-tight'>
          {title}
        </p>
      </div>
      <div className='flex gap-2 sm:gap-3 items-center flex-shrink-0'>
        <p className='text-sm sm:text-base font-medium whitespace-nowrap'>
          ${price}
        </p>
        {handleDelete && (
          <button
            className='p-1 hover:bg-red-100 rounded-full transition-colors duration-200'
            onClick={() => handleDelete(id)}
            aria-label="Remove item"
          >
            <XMarkIcon className='h-4 w-4 text-red-500' />
          </button>
        )}
      </div>
    </div>
  )
}

export default OrderCard