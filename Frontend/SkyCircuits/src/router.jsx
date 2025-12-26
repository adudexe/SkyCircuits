import { 
    createBrowserRouter,
    RouterProvider
 } from 'react-router-dom';
import { lazy } from 'react';
const Layout = lazy(() => import('./components/Layout/Layout'));
const Error = lazy(() => import('./components/Error/Error'));
// const Home = lazy(() => import('./pages/Home'));
import Home from './pages/Home';




export const router = createBrowserRouter([
    {
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    
    }
])