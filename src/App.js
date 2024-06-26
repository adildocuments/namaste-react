import React, {lazy, Suspense, useEffect, useState} from 'react';
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
import Cart from './components/Cart';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
const Grocery = lazy(()=>import('./components/Grocery'))

const AppLayout = () =>{
    const [userName, setUserName] = useState('adil');
    
    useEffect(() => {
      //authentication
        const data = {
            name:'Travish Head'
        }
        setUserName(data.name)

    }, [])
    

    return (
        <>
            <Provider store={appStore}>
                <Header/>
                <Outlet/>
                <Footer/>
            </Provider>
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
                path:"/grocery",
                element:<Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:'/restaurant-menu/:restId',
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<RouterProvider router={appRouter} />)