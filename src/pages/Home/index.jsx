// eslint-disable-next-line no-unused-vars
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShopContext } from '../../Context'
import { usePageTitle, usePageMeta } from '../../hooks/usePageTitle'

function Home() {

  const {
    setSearchByTitle,
    filteredItems
  } = useContext(ShopContext);

  // Set page title and meta
  usePageTitle('Discover Amazing Products');
  usePageMeta(
    'Browse our premium collection of electronics, clothing, jewelry and more. Find the perfect products at the best prices.',
    'online shopping, electronics, clothing, jewelry, premium products, best prices'
  );

  return (
    <Layout>
      {/* Hero Section */}
      <div className='w-full flex flex-col items-center mb-12'>
        <div className='text-center mb-8'>
          <h1 className='gradient-title font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            Discover Amazing Products
          </h1>
          <p className='text-blue-700/80 text-lg max-w-2xl mx-auto leading-relaxed'>
            Find the perfect items from our curated collection of premium products
          </p>
        </div>
        
        {/* Search Bar */}
        <div className='relative w-full max-w-2xl'>
          <input 
            type="text" 
            placeholder='Search for products, brands, or categories...'
            className='input-modern w-full pl-12 pr-4 py-4 text-base shadow-soft'
            onChange={(event) => setSearchByTitle(event.target.value)}
          />
          <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      {filteredItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-20 text-gray-500'>
          <div className='w-24 h-24 mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
            <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.239 0-4.236-.906-5.672-2.379M6.343 7.343A7.963 7.963 0 0112 5c4.418 0 8 3.582 8 8a7.956 7.956 0 01-.879 3.625m-15.242 0A7.963 7.963 0 014 13c0-1.292.307-2.515.879-3.625' />
            </svg>
          </div>
          <h3 className='text-2xl font-semibold mb-2 text-gray-700'>No products found</h3>
          <p className='text-gray-500 text-center max-w-md'>
            We couldn&apos;t find any products matching your search. Try different keywords or browse our categories.
          </p>
        </div>
      ) : (
        <div className='grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 w-full justify-items-center'>
          {
            filteredItems.map(item => <Card key = {item.id} data = {item} />)
          }
        </div>
      )}
      
      <ProductDetail/>
    </Layout>
  )
}

export default Home