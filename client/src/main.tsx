// Import necessary modules from React and React Router
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";

import { StrictMode } from "react";
import CupcakeDetails from "./pages/CupcakeDetails";
import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

const cupcakeLoader = async () => {
  try {
    const response = await fetch("http://localhost:3310/api/cupcakes");
    if (!response.ok) throw new Error("Failed to fetch cupcakes");
    return await response.json();
  } catch (error) {
    console.error("Error fetching cupcakes:", error);
    return [];
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        // Step 1: load data here
        loader: cupcakeLoader,
      },
      {
        path: "/cupcakes/:id",
        element: <CupcakeDetails />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
