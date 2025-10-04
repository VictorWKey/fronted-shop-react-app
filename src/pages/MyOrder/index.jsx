import { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShopContext } from '../../Context'
import OrderCard from '../../Components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom';
import { totalPrice } from '../../utils';

function MyOrder() {

  const {order} = useContext(ShopContext);
  const {id} = useParams();

  const currentOrder = order?.at(id === 'last' ? -1 : id);
  const products = currentOrder?.products;

  if (!currentOrder || !products) {
    return (
      <Layout>
        <div className='flex flex-col items-center justify-center py-12 text-gray-500'>
          <p className='text-lg mb-2'>Order not found</p>
          <Link 
            to="/my-orders"
            className='mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200'
          >
            Back to Orders
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='w-full max-w-2xl mx-auto'>
        <div className='flex justify-center items-center mb-6 relative'>
          <Link 
            to='/my-orders' 
            className='absolute left-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
            aria-label="Back to orders"
          >
            <ChevronLeftIcon className='w-6 h-6'/>
          </Link>
          <h1 className='font-medium text-xl sm:text-2xl'>
            Order #{(id === 'last' ? order.length : parseInt(id) + 1).toString().padStart(3, '0')}
          </h1>
        </div>
        
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='p-4 sm:p-6 border-b border-gray-100'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
              <p className='text-sm text-gray-600'>
                {currentOrder.date} • {products.length} {products.length === 1 ? 'item' : 'items'}
              </p>
              <p className='font-semibold text-lg text-green-600'>
                Total: ${totalPrice(products)}
              </p>
            </div>
          </div>
          
          <div className='p-4 sm:p-6'>
            <h2 className='font-medium text-base sm:text-lg mb-4'>Items Ordered</h2>
            <div className='space-y-3'>
              {products.map((product) => (
                <OrderCard
                  key={product.id}
                  id={product.id}
                  imageUrl={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyOrder