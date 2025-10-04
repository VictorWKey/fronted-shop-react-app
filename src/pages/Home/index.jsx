// eslint-disable-next-line no-unused-vars
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShopContext } from '../../Context'

function Home() {

  const {
    setSearchByTitle,
    filteredItems
  } = useContext(ShopContext);

  return (
    <Layout>
      <div className='w-full flex flex-col items-center mb-6'>
        <h1 className='font-medium text-xl sm:text-2xl lg:text-3xl mb-4 text-center'>
          Exclusive Products
        </h1>
        <input 
          type="text" 
          placeholder='Search products...'
          className='w-full max-w-md sm:max-w-lg p-3 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200'
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>
      
      {filteredItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-12 text-gray-500'>
          <p className='text-lg mb-2'>No products found</p>
          <p className='text-sm'>Try adjusting your search terms</p>
        </div>
      ) : (
        <div className='grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full justify-items-center'>
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