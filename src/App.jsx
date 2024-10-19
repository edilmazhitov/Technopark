import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routing/routing.jsx";

// ])

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
