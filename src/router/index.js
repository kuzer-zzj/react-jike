import LayOut from "@/pages/layout";
import Login from "@/pages/login";

import {createBrowserRouter} from "react-router-dom";

const router =createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    }
])

export default router;