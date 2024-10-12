import { Detail } from "@pages/detail/Detail";
import { detailLoader } from "@pages/detail/detailLoader";
import { Home } from "@pages/home/Home";
import { homeLoader } from "@pages/home/homeLoader";
import { Root } from "@pages/Root";
import { Search } from "@pages/search/Search";
import { searchLoader } from "@pages/search/searchLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <Search />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <Detail />,
        loader: detailLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
