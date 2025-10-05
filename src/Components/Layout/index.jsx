/* eslint-disable react/prop-types */

function Layout({children}) {
  return (
    <div className='flex flex-col mt-20 sm:mt-24 items-center px-4 sm:px-6 lg:px-8 min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
      <div className='w-full max-w-screen-2xl py-8'>
        {children}
      </div>
    </div>
  )
}

export default Layout