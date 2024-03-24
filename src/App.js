import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () =>{
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:'/restaurant-menu/:restId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<RouterProvider router={appRouter} />)