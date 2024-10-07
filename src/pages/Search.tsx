import { useLoaderData } from "react-router-dom";

export const Search = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Search Page</div>;
};
