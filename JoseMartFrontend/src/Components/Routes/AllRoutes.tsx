import { createBrowserRouter } from "react-router-dom";
import App from '../../App'
import SignUplOGIN from "../SignUpAndLogin/SignUpAndLogin";
import { SingleProduct } from "../Products/SIngleproduct";

export const AllRoutes = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/home',
        element:<App/>
    },
    {
        path:'/signup',
        element:<SignUplOGIN/>
    },
    {
        path:'/login',
        element:<SignUplOGIN/>
    },
    {
        path:'/home/products/:id',
        element:<SingleProduct/>
    }
   
])