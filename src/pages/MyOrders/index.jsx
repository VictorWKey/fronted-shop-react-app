import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShopContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard';
import { Link } from 'react-router-dom';

function MyOrders() {
  const {
    order
  } = useContext(ShopContext);

  return (
    <Layout>
      <h1 className='flex items-center font-medium text-xl mb-4'>My Orders</h1>
      {
        order?.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>

        ))
      }
    </Layout>
  )
}

export default MyOrders