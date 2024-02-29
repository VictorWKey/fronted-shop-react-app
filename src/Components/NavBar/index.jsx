import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


function NavBar() {
  const {
    cartProducts,
    openCheckoutSideMenu,
    setSearchByCategory,
    setSearchByTitle
  } = useContext(ShopContext);
  const activeStyle = "underline underline-offset-4"

  return (
    <nav className='w-full flex justify-between top-0 items-center fixed z-10 py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink 
            to = '/'
            onClick={() => setSearchByCategory("")}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByCategory("")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/mens-clothing'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByCategory("men's clothing")}
          >
            {"Men's clothing"}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/womens-clothing'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByCategory("women's clothing")}
          >
            {"Women's clothing"}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/electronics'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/jewelery'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByCategory("jewelery")}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          victorwkey@gmail.com
        </li>
        <li>
          <NavLink
            to = '/my-orders'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByTitle('')}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/my-account'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByTitle('')}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/sing-in'
            className = {({isActive}) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => setSearchByTitle('')}
          >
            Sing In
          </NavLink>
        </li>
        <li 
          className='flex items-center cursor-pointer'
          onClick={() => {
            openCheckoutSideMenu()
          }}
        >
          <ShoppingCartIcon className='W-5 h-5'/>
          <p>{cartProducts.length}</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar