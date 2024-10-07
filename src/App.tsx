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
        loader: async ({ request }) => {
          const { searchParams } = new URL(request.url);
          const term = searchParams.get("term");

          if (!term) {
            throw new Error("Search term must be provided");
          }

          const resp = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`);
          const data = await resp.json();
          console.log("Search term:", term);
          return data.objects;
        },
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
