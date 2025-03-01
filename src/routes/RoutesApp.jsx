import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BuyCredit from "../pages/BuyCredit";
import Result from "../pages/Result";
import Pricing from "../pages/Pricing";

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
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

export default router;
