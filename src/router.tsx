import { lazy } from "react";
import { Route } from "react-router-dom";
import { IRoute } from "components/route";

export const routes: Array<IRoute> = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
    exact: true,
    route: Route,
    name: "Home",
  },
  {
    path: "/detail/:id",
    component: lazy(() => import("./pages/Detail")),
    exact: true,
    route: Route,
    name: "Detail",
  },
  {
    path: "",
    component: lazy(() => import("./pages//NotFound")),
    exact: true,
    route: Route,
    name: "",
  },
];
