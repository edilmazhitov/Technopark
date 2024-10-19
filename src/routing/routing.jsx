import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Qyron from "../pages/Qyron/Qyron.jsx";
import Smart from "../pages/Smart/Smart.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

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
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router