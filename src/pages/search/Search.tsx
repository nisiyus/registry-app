import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import { PackageListItem } from "@components/PackageListItem";

export const Search = () => {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const renderedResults = searchResults.map((result, index) => {
    return <PackageListItem pack={result} key={index} />;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
};
