import GeekLayout from "@/pages/layout";
import Login from "@/pages/login";
import AuthRoute from "@/components/AuthRoute";

import { createBrowserRouter } from "react-router-dom";
import { lazy,Suspense } from "react";

const Home =lazy(()=>import( "@/pages/home")) ;
const Article = lazy(()=>import( "@/pages/article")) ;
const Publish = lazy(()=>import( "@/pages/publish")) ;


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <GeekLayout></GeekLayout>
      </AuthRoute>
    ),
    children: [
      {
        // path: "/home",
        index: true,
        element: <Suspense fallback={'加载中'}><Home></Home></Suspense> ,
      },
      {
        path: "/article",
        element:<Suspense fallback={'加载中'}> <Article></Article></Suspense>,
      },
      {
        path: "/publish",
        element:<Suspense fallback={'加载中'}> <Publish></Publish></Suspense>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
