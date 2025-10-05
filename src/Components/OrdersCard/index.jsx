/* eslint-disable react/prop-types */
import { ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

function OrdersCard({
  totalProducts,
  totalPrice,
  date = "01.02.24",
  index
}) {

  return (
    <div className='card-modern hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 group cursor-pointer'>
      <div className='p-6'>
        {/* Header */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg'>
              <ShoppingBagIcon className='w-6 h-6 text-white'/>
            </div>
            <div>
              <h3 className='font-bold text-lg text-gray-900'>
                Order #{(index + 1).toString().padStart(3, '0')}
              </h3>
              <p className='text-sm text-gray-500'>{date}</p>
            </div>
          </div>
          
          <div className='flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200'>
            <span className='text-xs text-gray-500'>View Details</span>
            <ChevronRightIcon className='w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200'/>
          </div>
        </div>
        
        {/* Order Stats */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4'>
            <div className='text-2xl font-bold text-gray-900 mb-1'>
              {totalProducts}
            </div>
            <div className='text-sm text-gray-600'>
              {totalProducts === 1 ? 'Product' : 'Products'}
            </div>
          </div>
          
          <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4'>
            <div className='text-2xl font-bold text-green-700 mb-1'>
              ${totalPrice}
            </div>
            <div className='text-sm text-green-600'>
              Total Amount
            </div>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className='mt-4 flex justify-end'>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200'>
            <div className='w-1.5 h-1.5 bg-green-500 rounded-full mr-2'></div>
            Completed
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrdersCard