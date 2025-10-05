/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


function NavBar() {
  const {
    cartProducts,
    openCheckoutSideMenu,
    setSearchByCategory,
    setSearchByTitle
  } = useContext(ShopContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeStyle = "text-indigo-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:via-indigo-600 after:to-purple-600 after:rounded-full"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const NavItems = ({ mobile = false }) => (
    <>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByCategory("");
            if (mobile) closeMobileMenu();
          }}
        >
          All Products
        </NavLink>
      </li>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/mens-clothing'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByCategory("men's clothing");
            if (mobile) closeMobileMenu();
          }}
        >
          {"Men's Clothing"}
        </NavLink>
      </li>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/womens-clothing'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByCategory("women's clothing");
            if (mobile) closeMobileMenu();
          }}
        >
          {"Women's Clothing"}
        </NavLink>
      </li>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/electronics'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByCategory("electronics");
            if (mobile) closeMobileMenu();
          }}
        >
          Electronics
        </NavLink>
      </li>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/jewelery'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByCategory("jewelery");
            if (mobile) closeMobileMenu();
          }}
        >
          Jewelry
        </NavLink>
      </li>
    </>
  );

  const UserItems = ({ mobile = false }) => (
    <>
      {!mobile && (
        <li className='text-gray-500 hidden lg:block text-sm'>
          victorwkey@gmail.com
        </li>
      )}
      <li className={mobile ? 'py-3' : ''}>
        <NavLink
          to = '/my-orders'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByTitle('');
            if (mobile) closeMobileMenu();
          }}
        >
          My Orders
        </NavLink>
      </li>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/my-account'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByTitle('');
            if (mobile) closeMobileMenu();
          }}
        >
          My Account
        </NavLink>
      </li>
      <li className={mobile ? 'py-3' : ''}>
        <NavLink 
          to = '/sing-in'
          className = {({isActive}) =>
            isActive ? activeStyle : `${mobile ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`
          }
          onClick={() => {
            setSearchByTitle('');
            if (mobile) closeMobileMenu();
          }}
        >
          Sign In
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className='nav-modern w-full flex justify-between top-0 items-center fixed z-20 py-4 sm:py-6 px-6 sm:px-8 text-sm font-medium'>
        {/* Left side - Logo */}
        <div className='flex items-center'>
          <NavLink 
            to = '/'
            onClick={() => setSearchByCategory("")}
            className='font-bold text-2xl sm:text-3xl mr-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-red-500 transition-all duration-300'
          >
            Shopi
          </NavLink>
          
          {/* Desktop Navigation - Categories */}
          <ul className='hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium'>
            <NavItems />
          </ul>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-4 sm:gap-6'>
          {/* Desktop Navigation - User Items */}
          <ul className='hidden md:flex items-center gap-4 xl:gap-6 text-sm font-medium'>
            <UserItems />
          </ul>
          
          {/* Shopping Cart */}
          <button 
            className='relative flex items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group'
            onClick={() => {
              openCheckoutSideMenu()
            }}
          >
            <ShoppingCartIcon className='w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200'/>
            {cartProducts.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse'>
                {cartProducts.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-3 rounded-xl hover:bg-gray-50 transition-all duration-200'
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='w-6 h-6 text-gray-700' />
            ) : (
              <Bars3Icon className='w-6 h-6 text-gray-700' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-15 md:hidden'
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu-modern fixed top-20 sm:top-24 right-0 w-80 max-w-[90vw] h-full z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='p-8'>
          <div className='mb-8'>
            <h3 className='font-bold text-xl mb-6 text-gray-900'>Categories</h3>
            <ul className='space-y-1'>
              <NavItems mobile={true} />
            </ul>
          </div>
          
          <div className='h-px bg-gradient-to-r from-gray-200 to-transparent my-8' />
          
          <div>
            <h3 className='font-bold text-xl mb-6 text-gray-900'>Account</h3>
            <ul className='space-y-1'>
              <UserItems mobile={true} />
            </ul>
          </div>
          
          <div className='mt-8 pt-8 border-t border-gray-100'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
                <span className='text-white font-semibold text-sm'>VW</span>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-900'>Victor W</p>
                <p className='text-xs text-gray-500'>victorwkey@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar