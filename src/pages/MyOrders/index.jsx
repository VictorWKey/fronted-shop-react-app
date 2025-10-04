import { useContext } from 'react'
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
      <div className='w-full max-w-4xl mx-auto'>
        <h1 className='font-medium text-xl sm:text-2xl lg:text-3xl mb-6 text-center sm:text-left'>
          My Orders
        </h1>
        
        {order?.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-12 text-gray-500'>
            <p className='text-lg mb-2'>No orders yet</p>
            <p className='text-sm text-center'>When you place orders, they will appear here</p>
            <Link 
              to="/"
              className='mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200'
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className='space-y-4'>
            {order?.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  totalProducts={order.totalProducts}
                  totalPrice={order.totalPrice}
                  date={order.date}
                  index={index}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default MyOrders