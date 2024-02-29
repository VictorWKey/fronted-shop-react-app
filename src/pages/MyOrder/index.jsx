import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShopContext } from '../../Context'
import OrderCard from '../../Components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom';
import { totalPrice } from '../../utils';

function MyOrder() {

  const {order} = useContext(ShopContext);
  const {id} = useParams();

  const products = order?.at(id === 'last' ? -1 : id)?.products;

  return (
    <Layout>
      <p className='flex justify-center items-center w-80 mb-4 relative'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='w-6'/>
        </Link>
        <span className='absi'>My Order</span>
      </p>
      <div className='flex flex-col'>
        {
          products.map((product) => (
            <OrderCard
              key={product.id}
              id = {product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
            />
          ))
        }
        <p className='w-80 flex justify-between'>
          <span className='text-lg'>Total</span>
          <span className='text-lg font-medium'>${totalPrice(products)}</span>
        </p>
      </div>
    </Layout>
  )
}

export default MyOrder