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
  const activeStyle = "underline underline-offset-4"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const NavItems = ({ mobile = false }) => (
    <>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByCategory("");
            if (mobile) closeMobileMenu();
          }}
        >
          All
        </NavLink>
      </li>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/mens-clothing'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByCategory("men's clothing");
            if (mobile) closeMobileMenu();
          }}
        >
          {"Men's clothing"}
        </NavLink>
      </li>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/womens-clothing'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByCategory("women's clothing");
            if (mobile) closeMobileMenu();
          }}
        >
          {"Women's clothing"}
        </NavLink>
      </li>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/electronics'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByCategory("electronics");
            if (mobile) closeMobileMenu();
          }}
        >
          Electronics
        </NavLink>
      </li>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/jewelery'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByCategory("jewelery");
            if (mobile) closeMobileMenu();
          }}
        >
          Jewelery
        </NavLink>
      </li>
    </>
  );

  const UserItems = ({ mobile = false }) => (
    <>
      {!mobile && (
        <li className='text-black/60 hidden lg:block'>
          victorwkey@gmail.com
        </li>
      )}
      <li className={mobile ? 'py-2' : ''}>
        <NavLink
          to = '/my-orders'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByTitle('');
            if (mobile) closeMobileMenu();
          }}
        >
          My Orders
        </NavLink>
      </li>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/my-account'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
          }
          onClick={() => {
            setSearchByTitle('');
            if (mobile) closeMobileMenu();
          }}
        >
          My Account
        </NavLink>
      </li>
      <li className={mobile ? 'py-2' : ''}>
        <NavLink 
          to = '/sing-in'
          className = {({isActive}) =>
            isActive ? activeStyle : undefined
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
      <nav className='w-full flex justify-between top-0 items-center fixed z-20 py-3 sm:py-5 px-4 sm:px-8 text-sm font-light bg-white border-b border-gray-100'>
        {/* Left side - Logo */}
        <div className='flex items-center'>
          <NavLink 
            to = '/'
            onClick={() => setSearchByCategory("")}
            className='font-semibold text-lg sm:text-xl mr-4'
          >
            Shopi
          </NavLink>
          
          {/* Desktop Navigation - Categories */}
          <ul className='hidden lg:flex items-center gap-3 xl:gap-4 text-xs xl:text-sm'>
            <NavItems />
          </ul>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-2 sm:gap-4'>
          {/* Desktop Navigation - User Items */}
          <ul className='hidden md:flex items-center gap-3 xl:gap-4 text-xs xl:text-sm'>
            <UserItems />
          </ul>
          
          {/* Shopping Cart */}
          <div 
            className='flex items-center cursor-pointer p-2'
            onClick={() => {
              openCheckoutSideMenu()
            }}
          >
            <ShoppingCartIcon className='w-5 h-5 sm:w-6 sm:h-6'/>
            <span className='ml-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
              {cartProducts.length}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3Icon className='w-6 h-6' />
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
      <div className={`fixed top-16 sm:top-20 right-0 w-80 max-w-[90vw] h-full bg-white z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='p-6'>
          <div className='mb-6'>
            <h3 className='font-semibold text-lg mb-4'>Categories</h3>
            <ul className='space-y-2'>
              <NavItems mobile={true} />
            </ul>
          </div>
          
          <hr className='my-6' />
          
          <div>
            <h3 className='font-semibold text-lg mb-4'>Account</h3>
            <ul className='space-y-2'>
              <UserItems mobile={true} />
            </ul>
          </div>
          
          <div className='mt-6 pt-6 border-t'>
            <p className='text-sm text-gray-600'>victorwkey@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar