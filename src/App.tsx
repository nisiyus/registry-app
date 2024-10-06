import { Detail } from "@pages/Detail";
import { Home } from "@pages/Home";
import { Root } from "@pages/Root";
import { Search } from "@pages/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/packages/:name",
        element: <Detail />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
