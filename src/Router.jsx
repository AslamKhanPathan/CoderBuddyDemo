import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Registration from "./pages/Registration";
import PostCard from "./pages/PostCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Registration /> },
      { path: "/posts", element: <PostCard /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
