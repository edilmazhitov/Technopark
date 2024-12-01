import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routing/routing";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <RouterProvider router={router}/>
        <ToastContainer
            position="top-right"
            autoClose={3000}
        />
    </>
  )
}

export default App
