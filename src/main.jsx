import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';    
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './pages/auth/login/login.jsx'
import Home from './pages/home/Home.jsx'
import Register  from './pages/auth/register/register.jsx';
import Password_reset from './pages/auth/password_reset/password_reset.jsx';
import Enlisting_form from './pages/enlisting_form/form.jsx';
import ListingDetails from './pages/listingDetails/ListingDetails.jsx';
import ListingIndividualDetails from './pages/listingDetails/ListingIndividualDetails.jsx';





const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'login',
    element: <Login/>,
  },
  {
    path:'register',
    element: <Register/>,
  },
  {
    path:'password_reset',
    element: <Password_reset/>,
  },
  {
    path:'enlisting_form',
    element: <Enlisting_form/>,
  },
  {
    path:'listingDetails',
    element: <ListingDetails/>,
  },
  {
    path:'listingDetails/:id',
    element: <ListingIndividualDetails/>,
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
