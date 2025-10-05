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
      {/* Enhanced Overlay */}
      {isProductDetailOpen && (
        <div 
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-10 sm:hidden'
          onClick={closeProductDetail}
        />
      )}
      
      <aside className={`${isProductDetailOpen ? 'flex animate-slide-in-right' : 'hidden'} product-detail flex-col fixed right-0 glass-effect sm:border-2 sm:border-gray-100 sm:rounded-l-2xl shadow-2xl z-20`}>
        {/* Modern Header */}
        <div className='flex justify-between items-center p-6 border-b border-gray-100/50'>
          <div>
            <h2 className='font-bold text-xl text-gray-900'>Product Details</h2>
            <p className='text-sm text-gray-500 mt-1'>Everything you need to know</p>
          </div>
          <button
            className='p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105'
            onClick={closeProductDetail}
            aria-label="Close product detail"
          >
            <XMarkIcon className='w-5 h-5 text-gray-600' />
          </button>
        </div>
        
        <div className='flex flex-col overflow-y-auto p-6 flex-1 space-y-8'>
          {/* Enhanced Product Image */}
          <figure className='relative group'>
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100'>
              <img 
                src={productDetails.image} 
                alt={productDetails.title}
                className='w-full max-w-sm mx-auto h-56 sm:h-72 lg:h-80 object-contain transition-transform duration-300 group-hover:scale-105'
              />
            </div>
          </figure>
          
          {/* Product Information */}
          <div className='flex flex-col space-y-6'>
            {/* Price and Category */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='price-display text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
                  ${productDetails.price}
                </div>
                <div className='category-tag bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200'>
                  {productDetails.category}
                </div>
              </div>
            </div>
            
            {/* Product Title */}
            <div>
              <h3 className='text-xl font-bold text-gray-900 leading-tight mb-2'>
                {productDetails.title}
              </h3>
            </div>
            
            {/* Description Card */}
            <div className='card-modern p-6 bg-gradient-to-br from-gray-50 to-white'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                <h4 className='font-semibold text-gray-900'>
                  Product Description
                </h4>
              </div>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
                {productDetails.description}
              </p>
            </div>
            
            {/* Action Button */}
            <div className='pt-4'>
              <button 
                className='btn-accent w-full py-4 text-base'
                onClick={closeProductDetail}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default ProductDetail;