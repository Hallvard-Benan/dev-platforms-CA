import { Router, Route, RootRoute } from "@tanstack/react-router";

import HomePage from "./pages/home";

import LoginPage from "./pages/login";
import BookPage from "./pages/book";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const bookRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/book",
  component: BookPage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const routeTree = rootRoute.addChildren([indexRoute, bookRoute, loginRoute]);

export const router = new Router({ routeTree });
export default router;
