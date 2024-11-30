import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Qyron from "../pages/Qyron/Qyron";
import Smart from "../pages/Smart/Smart";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import Favorites from "../pages/Favorites/Favorites";
import Profile from '../pages/Profile/Profile'
import Catalog from "../pages/Catalog/Catalog.jsx";

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
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'favorites',
                element: <Favorites/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'catalog',
                element: <Catalog/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: 'login',
        element: <Login/>
    },
])

export default router