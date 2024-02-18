import { Router, Route, RootRoute } from "@tanstack/react-router";

import HomePage from "./pages/home";

import UserPage from "./pages/user";
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

const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/user:id",
  component: UserPage,
});

const routeTree = rootRoute.addChildren([indexRoute, bookRoute, userRoute]);

export const router = new Router({ routeTree });
export default router;
