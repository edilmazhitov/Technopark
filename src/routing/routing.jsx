import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Qyron from "../pages/Qyron/Qyron";
import Smart from "../pages/Smart/Smart";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'qyron',
                element: <Qyron/>
            },
            {
                path: 'smart',
                element: <Smart/>
            },
            {
              path: 'register',
              element: <Register/>
            },
            {
              path: 'login',
              element: <Login/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router