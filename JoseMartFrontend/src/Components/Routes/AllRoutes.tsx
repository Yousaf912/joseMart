import { createBrowserRouter } from "react-router-dom";
import App from '../../App'
import SignUplOGIN from "../SignUpAndLogin/SignUpAndLogin";

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
   
])