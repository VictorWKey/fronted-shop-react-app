import { useContext } from 'react'
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
    <>
      {/* Mobile Overlay */}
      {isProductDetailOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden'
          onClick={closeProductDetail}
        />
      )}
      
      <aside className={`${isProductDetailOpen ? 'flex animate-slide-in-right' : 'hidden'} product-detail flex-col fixed right-0 bg-white border-l border-gray-200 sm:border sm:border-black sm:rounded-l-lg shadow-2xl z-20`}>
        <div className='flex justify-between items-center p-4 sm:p-6 border-b border-gray-100'>
          <h2 className='font-medium text-lg sm:text-xl'>Product Detail</h2>
          <button
            className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
            onClick={closeProductDetail}
            aria-label="Close product detail"
          >
            <XMarkIcon className='w-6 h-6 cursor-pointer' />
          </button>
        </div>
        
        <div className='flex flex-col overflow-y-auto p-4 sm:p-6 flex-1'>
          <figure className='mb-6'>
            <img 
              src={productDetails.image} 
              alt={productDetails.title}
              className='w-full max-w-sm mx-auto h-48 sm:h-64 lg:h-80 object-contain rounded-lg'
            />
          </figure>
          
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
              <span className='font-bold text-xl sm:text-2xl text-green-600'>
                ${productDetails.price}
              </span>
              <span className='text-xs sm:text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600 w-fit'>
                {productDetails.category}
              </span>
            </div>
            
            <h3 className='font-semibold text-base sm:text-lg leading-tight'>
              {productDetails.title}
            </h3>
            
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h4 className='font-medium text-sm sm:text-base mb-2 text-gray-800'>
                Description
              </h4>
              <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                {productDetails.description}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default ProductDetail;