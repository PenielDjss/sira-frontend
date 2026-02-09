import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "@/layouts/landing/Index";
import HomePage from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
