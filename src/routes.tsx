import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import TagListPage from "./pages/tagList/tagList";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tagList",
    element: <TagListPage />,
    errorElement: <ErrorPage />,
  },
]);
