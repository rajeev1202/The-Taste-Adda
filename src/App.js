import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About';
import ErrorPage from './component/ErrorPage';
import { Outlet } from 'react-router-dom';
import Contact from './component/Contact';
import RestaurantMenu from './component/RestaurantMenu';
import LoginPage from './component/LoginPage';



// const SearchBar = (searchTxt, itemList) => {

//   return(
//     <div></div>
//   )
// }

const App = () => (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
    
])

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)