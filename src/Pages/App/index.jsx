import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/*', element: <NotFound />},
    { path: '/signin', element: <SignIn />},
    { path: '/clothes', element: <Home />},
    { path: '/electronics', element: <Home />},
    { path: '/furnitures', element: <Home />},
    { path: '/toys', element: <Home />},
    { path: '/others', element: <Home />},
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}

export default App
