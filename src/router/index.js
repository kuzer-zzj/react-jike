import GeekLayout from "@/pages/layout";
import Login from "@/pages/login";
import AuthRoute from "@/components/AuthRoute";

import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Article from "@/pages/article";
import Publish from "@/pages/publish";

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
        element: <Home></Home>,
      },
      {
        path: "/article",
        element: <Article></Article>,
      },
      {
        path: "/publish",
        element: <Publish></Publish>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
