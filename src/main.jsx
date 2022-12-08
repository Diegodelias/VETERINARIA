import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from "react-router-dom "
import Layout from './components/Layout'
import Index from './Pages/Index'
import Nosotros from './Pages/Nosotros'
import Blog from './Pages/Blog'
import Contacto from './Pages/Contacto'
import Tienda from './Pages/Tienda'
import Carrito from './components/Carrito'
import './index.css'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
// You can specify which plugins you need



const router = createBrowserRouter ([ 
  {
  path:"/",
  element : <Layout/>,
  children: [
    {
      index : true ,
      element: <Index/> 
     
    },
    {
      path: "/nosotros",
      element: <Nosotros/>
     
    },
    {
      path: "/blog",
      element: <Blog/>
     
    },
    {
      path: "/Contacto",
      element: <Contacto/>
     
    },
    {
      path: "/tienda",
      element: <Tienda/>
     
    },
    {
      path: "/carrito",
      element: <Carrito/>
     
    },
    {
      path: "/Login",
      element: <Login/>
     
    },
    {
      path: "/registro",
      element: <Register/>
     
    }

 
  ]}
 


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider    router={ router }   />
  </React.StrictMode>
)
