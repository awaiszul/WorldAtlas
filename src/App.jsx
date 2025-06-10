import React from "react";
import './App.css';
import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
// import {Images} from "../Images/images.jpg"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryDetail } from "./Pages/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Country", element: <Country /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Country/:name", element: <CountryDetail/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
  <></>;
}
