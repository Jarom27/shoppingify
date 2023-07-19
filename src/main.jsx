import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { getItemInfo, getShoppingList } from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ShoppingView from './components/ShoppingView.jsx';
import ItemForm from './components/ItemForm.jsx';
import Details from './components/Details.jsx';
import History from './components/History.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:"/",
            loader:  getShoppingList,
            element: <ShoppingView></ShoppingView>
        },
        {
            path:"/add-item",
            element: <ItemForm></ItemForm>
        },
        {
          path:"/details/:id",
          loader: getItemInfo,
          element: <Details></Details>
        }
      ]
    },
    {
      path: "/history",
      element: <History></History>,
      children:[
        {
          path: "/history",
          loader:  getShoppingList,
          element: <ShoppingView></ShoppingView>
        }
      ]


    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
