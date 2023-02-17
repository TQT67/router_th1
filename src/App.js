import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <div>About Us</div>,
      },
      {
        path: "/about/us",
        element: <div>US</div>,
      },
      {
        path: "/about/me",
        element: <div>me</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>404-Not Found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
