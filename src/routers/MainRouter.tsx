/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import MainTemplate from "../components/template";
import NotFound from "../components/common/NotFound";
import CircularProgress from "@mui/material/CircularProgress";
import Paths from "../constants/Paths";

const Home = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <MainTemplate />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Navigate to={Paths.HOME} />,
      },
      {
        path: Paths.HOME,
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
