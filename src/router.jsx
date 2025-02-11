import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services1 from "./pages/Services/Services1";
import Services2 from "./pages/Services/Services2";
import Services3 from "./pages/Services/Services3";
import Testimonials from "./pages/Testimonials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "services",
        children: [
          {
            path: "service-1",
            element: <Services1 />,
          },
          {
            path: "service-2",
            element: <Services2 />,
          },
          {
            path: "service-3",
            element: <Services3 />,
          },
        ],
      },
    ],
  },
]);
