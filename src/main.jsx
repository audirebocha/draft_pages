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
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
