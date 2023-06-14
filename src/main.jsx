import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { productAndCartData } from "./Loaders/getCartAndLoaderData";
import{ Toaster } from 'react-hot-toast';

const address = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productAndCartData,
    
    children: [
      {path: "/", element: <Home />},
      { path: "about", element: <About />},
      { 
        path: "shop", element: <Shop></Shop>,
        loader: ()=>fetch('products.json')        
        },
        {
          path:'cart',
          element:<Cart></Cart>,
          loader: productAndCartData,
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Toaster/>
  <RouterProvider router={address} />
  </>
);
