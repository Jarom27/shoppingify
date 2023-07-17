import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ShoppingView from './components/ShoppingView.jsx';
import ItemForm from './components/ItemForm.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:"/",
            element: <ShoppingView></ShoppingView>
        },
        {
            path:"/add-item",
            element: <ItemForm></ItemForm>
        }
      ]
    },
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
