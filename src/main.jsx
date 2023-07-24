import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './index.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Collage from './pages/Collage';
import Addmition from './pages/Addmition';
import MyCollage from './pages/MyCollage';
import Login from './pages/Login';
import Registation from './pages/Registation';
import Authprovider from './context/Authprovider';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/login',
        element: <Login></Login>,
        
      },
      {
        path:'/singup',
        element: <Registation></Registation>,
        
      },
      {
        path:'/',
        element: <Home></Home>,
        loader: () => {return fetch("collage.json").then(res=> res.json())}
      },
      {
        path:'/collage',
        element: <Collage></Collage>,
        loader: () => {return fetch("collage.json").then(res=> res.json())}
      },
      {
        path:'/Addmition',
        element: <Addmition></Addmition>,
        loader: () => {return fetch("collage.json").then(res=> res.json())}
      },
      {
        path:'/Mycollage',
        element: <MyCollage></MyCollage>
      } 
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>
    <RouterProvider router={router}></RouterProvider>
  </Authprovider>
  </React.StrictMode>,
)
