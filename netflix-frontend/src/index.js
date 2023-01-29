import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider, redirect
} from "react-router-dom";
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';


const user = !false;

const router = createBrowserRouter([
  {
    path: "/",
    element: (user ? <Home /> : <Register />),
  },

  {
    path: "/movies",
    element: (user ? <Home type={"movie"}/> : <Register />),
  },

  {
    path: "/series",
    element: (user ? <Home type={"series"}/> : <Register />),
  },

  {
    path: "/watch",
    element: (user ? <Watch /> : <Register />),
  },

  {
    path: "/signup",
    element: (!user ? <Register/> : <Home />),
  },

  {
    path: "/signin",
    element: <Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

