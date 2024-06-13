import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AllProducts from './pages/AllProducts.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import AddProduct from './pages/AddProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Profile from './pages/Profile.jsx';
import MyProducts from './pages/MyProducts.jsx';
import UserProfile from './pages/UserProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/products",
        element: <AllProducts/>,
        // loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path:"/products/:id",
        element: <ProductDetails/>,
        loader: ({params})=> 
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path:"/products/edit/:id",
        element: <EditProduct/>,
        loader: ({params})=> 
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children:[ 
          {
            path:"/dashboard/profile",
            element: <Profile/>
          },
          // {
          //   path:"",
          //   element: <UserProfile/>
          // },

          {
            path:"/dashboard/add-blog",
            element: <AddProduct/>
          },

          {
            path:"/dashboard/my-blogs",
            element: <MyProducts/>,
          },

          {
            path:"",
            element: <AllProducts/>,
          },

        ]
      },
    
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
)
