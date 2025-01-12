import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BuyCredit from "../pages/BuyCredit";
import Result from "../pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy-credit",
    element: <BuyCredit />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

export default router;
