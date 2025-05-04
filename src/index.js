import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DarkModeProvider } from "./components/DarkModeContext"; // Import the provider
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CityForecast from "./pages/CityForecast";
import FeatureGrid from "./pages/FeatureGrid";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cityForecast",
    element: <CityForecast />,
  },
  {
    path: "/FeatureGrid",
    element: <FeatureGrid />,
  }
    
]);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
