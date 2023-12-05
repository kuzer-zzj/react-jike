import LayOut from "@/pages/layout";
import Login from "@/pages/login";
import AuthRoute from "@/components/AuthRoute";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <LayOut></LayOut>
      </AuthRoute>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
