import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import Root from './Root.jsx';
import Home from './Components/Home.jsx'; 
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Product from './Components/Product.jsx';
import Details from './Components/Details.jsx';
import WheelProduct from './Components/WheelProducts.jsx';
import WheelDetails from './Components/WheelDetails.jsx';
import Privacy from './Components/Privacy.jsx';
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, 
      {
        path: "/About",
        element: <About></About>,
      },  
      {
        path: "/Contact",
        element: <Contact></Contact>,
      }, 
      {
        path: '/tire/:id',
        element: <Details></Details>,
        loader : () => fetch('/tire.json'),
      },
      {
        path: '/wheel/:id',
        element: <WheelDetails></WheelDetails>,
        loader : () => fetch('/wheel.json'),
      },
      {
        path: '/Product',
        element: <Product></Product>,
      },
      {
        path: '/WheelProducts',
        element: <WheelProduct></WheelProduct>,
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>,
      },
      
    ],
  },
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

