import React from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './Components/Fruits/Fruits'
import Dairy from './Components/Dairy/Dairy'
import Seafood from './Components/Seafood/Seafood'
import AllProdcuts from './Components/AllProducts/AllProdcuts'
import Layout from './Components/Layout/Layout'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/fruits',
          element: <Fruits></Fruits>
        },

        {
          path: '/dairy',
          element: <Dairy></Dairy>
        },

        {
          path: '/seafood',
          element: <Seafood></Seafood>
        },  

        {
          path: '/allproducts',
          element: <AllProdcuts></AllProdcuts>
        }
      ]
    },

  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
