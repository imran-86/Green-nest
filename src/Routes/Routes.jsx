import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profiles from "../Pages/Profiles";

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
               path:'/plants',
               Component:Plants
            },
            {
                path:'/profile',
                Component:Profiles
            }
           
        ]
    }
]);
export default router;