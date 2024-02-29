import {useRoutes, BrowserRouter} from 'react-router-dom';
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css'
import NavBar from '../../Components/NavBar';
import { ShopProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

const AppRoutes = () => {
  return useRoutes([
    {path: '/', element: <Home />},
    {path: '/:category', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/*', element: <NotFound />},
    {path: '/sing-in', element: <SingIn />},
  ])
}

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App
