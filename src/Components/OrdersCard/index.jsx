/* eslint-disable react/prop-types */
import { ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

function OrdersCard({
  totalProducts,
  totalPrice,
  date = "01.02.24",
  index
}) {

  return (
    <div className='w-full hover:shadow-md transition-shadow duration-200'>
      <div className='flex justify-between items-center p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 bg-white w-full'>
        <div className='flex items-center gap-3 sm:gap-4 flex-1'>
          <div className='bg-blue-50 p-2 rounded-full'>
            <ShoppingBagIcon className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600'/>
          </div>
          
          <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 flex-1'>
            <span className='text-sm sm:text-base font-medium'>
              Order #{(index + 1).toString().padStart(3, '0')}
            </span>
            <span className='text-xs sm:text-sm text-gray-600'>
              {totalProducts} {totalProducts === 1 ? 'Product' : 'Products'}
            </span>
            <span className='text-xs sm:text-sm text-gray-500 hidden sm:block'>
              {date}
            </span>
          </div>
        </div>
        
        <div className='flex items-center gap-2 sm:gap-4'>
          <span className='font-semibold text-base sm:text-lg text-green-600'>
            ${totalPrice}
          </span>
          <ChevronRightIcon className='w-4 h-4 sm:w-5 sm:h-5 text-gray-400'/>
        </div>
      </div>
    </div>
  )
}

export default OrdersCard