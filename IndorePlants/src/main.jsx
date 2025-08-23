import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Popular from "./Pages/Popular.jsx";
import Review from "./Pages/Review.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "hero",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "review",
        element: <Review />,
      },

      {
        path: "*",
        element: (
          <span className="flex justify-center text-3xl mt-5 p-2 font-bold text-red-500">
            {" "}
            404 | Not Found{" "}
          </span>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
