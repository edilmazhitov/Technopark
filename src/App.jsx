import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routing/routing.jsx";
import {ToastContainer, toast} from "react-toastify";

// ])

function App() {
  return (
    <>
        <RouterProvider router={router}/>
        <ToastContainer />
    </>
  )
}

export default App
