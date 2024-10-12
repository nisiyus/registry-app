import { useLoaderData } from "react-router-dom";
import { DetailLoaderResult } from "./detailLoader";

export const Detail = () => {
  const { detail } = useLoaderData() as DetailLoaderResult;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">{detail.name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{detail.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200 rounded">{detail.license}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Author</h3>
        <div className="p-3 bg-gray-200 rounded">{detail.author?.name}</div>
      </div>
    </div>
  );
};
