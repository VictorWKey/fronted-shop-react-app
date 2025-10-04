import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'

function SingIn() {
  return (
    <Layout>
      <div className='w-full max-w-md mx-auto'>
        <div className='bg-white rounded-lg shadow-lg border border-gray-200 p-6 sm:p-8'>
          <h1 className='font-semibold text-2xl sm:text-3xl mb-6 text-center text-gray-800'>
            Sign In
          </h1>
          
          <form className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200'
                placeholder='Enter your email'
              />
            </div>
            
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200'
                placeholder='Enter your password'
              />
            </div>
            
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='remember'
                  className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                />
                <label htmlFor='remember' className='ml-2 text-sm text-gray-600'>
                  Remember me
                </label>
              </div>
              <a href='#' className='text-sm text-blue-600 hover:text-blue-800'>
                Forgot password?
              </a>
            </div>
            
            <button
              type='submit'
              className='w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium'
            >
              Sign In
            </button>
          </form>
          
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Don&apos;t have an account?{' '}
              <Link to='/sign-up' className='text-blue-600 hover:text-blue-800 font-medium'>
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingIn