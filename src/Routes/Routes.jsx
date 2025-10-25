import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profiles from "../Pages/Profiles";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PlantCardDetails from "../Pages/PlantCardDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ForgotPassword from "../Components/ForgotPassword";


const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            
            {
                path:'/profile',
                element:<PrivateRoute><Profiles></Profiles></PrivateRoute>
            },
            {
                path:"/login",
                Component: Login
            },
            {
                path:"/profile/login",
                Component: Login
            },
            {
                path:"/register",
                Component:Register
            },
            
            {
                path:"/:id",
                element:<PrivateRoute><PlantCardDetails></PlantCardDetails></PrivateRoute>
            },
            {
               path:'/plants',
               Component:Plants
            },
            {
                path:"/plant/:id",
                element: <PrivateRoute><PlantCardDetails></PlantCardDetails></PrivateRoute>
            },
            {
                path:"/forgot-password",
                Component:ForgotPassword,
            }
           
        ]
    }
]);
export default router;