// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
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
      <h1 className='flex items-center font-medium text-xl mb-4'>Exclusive Products</h1>
      <input 
        type="text" 
        placeholder='Search Product'
        className='w-80 p-3 mb-4 rounded-lg border border-black'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          filteredItems.map(item => <Card key = {item.id} data = {item} />)
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home