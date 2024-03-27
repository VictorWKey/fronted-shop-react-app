/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {

  // Shopping Cart - Cart Products
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - My Order
  const [order, setOrder] = useState([]);

  // Checkout Side Menu - Open/Close Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail - Open/Close Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show Details
  const [productDetails, setProductDetails] = useState({
    title: '',
    price: '',
    description : '',
    image: ''
  });

  // Get Products
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setItems(json))
  }, [])

   // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  // Get Products by title
  const [searchByCategory, setSearchByCategory] = useState('');

  // Filtered Products by title
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredItemsByTitle = (items, itemTitleSearch) => {
    return items?.filter(item => item.title.toLowerCase().includes(itemTitleSearch.toLowerCase()))
  }

  const filteredItemsByCategory = (items, itemCategorySearch) => {
    return items?.filter(item => item.category.toLowerCase() === itemCategorySearch.toLowerCase());
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if(searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items, searchByTitle)
    }

    if(searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory)
    }

    if(searchType === 'BY_CATEGORY_AND_TITLE'){
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
  }

  useEffect(() => {
    console.log(searchByTitle)
    if ((searchByTitle?.length > 0 || searchByTitle) && (searchByCategory?.length === 0 || !searchByCategory)){
      setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    }

    if ((searchByCategory?.length > 0 || searchByCategory) && (searchByTitle?.length === 0 || !searchByTitle)){
      setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    }

    if((searchByTitle?.length > 0 || searchByTitle) && (searchByCategory?.length > 0 || searchByCategory)){
      setFilteredItems(filterBy('BY_CATEGORY_AND_TITLE', items, searchByTitle, searchByCategory))
    }

    if((searchByCategory?.length === 0 || !searchByCategory) && (searchByTitle?.length === 0 || !searchByTitle)){
      setFilteredItems(items)
    }

    return () => {
      setSearchByTitle(null)
    }

  }, [items, searchByTitle, searchByCategory])
  
  return (
    <ShopContext.Provider value = {{
      order,
      setOrder,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productDetails,
      setProductDetails,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setSearchByCategory
    }}>
      {children}
    </ShopContext.Provider>
  )
}

