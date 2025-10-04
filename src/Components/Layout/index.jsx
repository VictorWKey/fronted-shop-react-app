/* eslint-disable react/prop-types */

function Layout({children}) {
  return (
    <div className='flex flex-col mt-16 sm:mt-20 items-center px-4 sm:px-6 lg:px-8 min-h-screen w-full'>
      <div className='w-full max-w-screen-2xl'>
        {children}
      </div>
    </div>
  )
}

export default Layout