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
    <div className='card-modern p-4 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group'>
      <div className='flex gap-4 items-center'>
        {/* Product Image */}
        <figure className='h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100'>
          <img 
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' 
            src={imageUrl} 
            alt={title}
            loading="lazy"
          />
        </figure>
        
        {/* Product Info */}
        <div className='flex-1 min-w-0'>
          <h3 className='text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-200'>
            {title}
          </h3>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-900'>
              ${price}
            </div>
            {handleDelete && (
              <button
                className='p-2 hover:bg-red-50 hover:border-red-200 rounded-xl border border-gray-200 transition-all duration-200 group/delete hover:scale-105'
                onClick={() => handleDelete(id)}
                aria-label="Remove item"
              >
                <XMarkIcon className='h-4 w-4 text-gray-400 group-hover/delete:text-red-500 transition-colors duration-200' />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard