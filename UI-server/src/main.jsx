import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/auth/login/login.jsx'
import Home from './pages/home/home.jsx';
import Register  from './pages/auth/register/register.jsx';
import Password_reset from './pages/auth/password_reset/password_reset.jsx';
import Enlisting_form from './pages/enlisting_form/form.jsx';
import Admin_Login from './pages/admin/login.jsx';
import Admin_Dashboard from './pages/admin/dashboard/admin_dash.jsx';
import ListingDetails from './pages/listingDetails/ListingDetails.jsx';
import IndividualListing from './pages/listingDetails/ListingIndividualDetails.jsx';
import SublettingForm from './pages/orders/SublettingForm.jsx';
import Client_Dashboard from './pages/client/dashboard/client_dash.jsx';


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
    path:'admin',
    element: <Admin_Login/>,
  },
  {
    path:'admin_dashboard',
    element: <Admin_Dashboard/>,
  },
  {
    path:'client_dashboard',
    element: <Client_Dashboard/>,
  },
  {
    path:'listingDetails',
    element: <ListingDetails/>,
  },
  {
    path:'listingDetails/:id',
    element: <IndividualListing/>,
  },
  {
    path:'listingDetails/:id/SublettingForm',
    element: <SublettingForm/>,
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
