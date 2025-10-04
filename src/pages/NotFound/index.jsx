import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'
import { HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function NotFound() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center py-12 px-4 text-center'>
        <div className='mb-8'>
          <ExclamationTriangleIcon className='w-20 h-20 sm:w-24 sm:h-24 text-gray-400 mx-auto mb-4' />
          <h1 className='text-6xl sm:text-8xl font-bold text-gray-300 mb-4'>404</h1>
          <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800 mb-4'>
            Page Not Found
          </h2>
          <p className='text-gray-600 max-w-md mx-auto mb-8'>
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link
            to='/'
            className='flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium'
          >
            <HomeIcon className='w-4 h-4' />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className='px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium'
          >
            Go Back
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound