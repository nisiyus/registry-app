import { Params } from "react-router-dom";
import { getPackage } from "src/api/queries/getPackage";
import { PackageDetails } from "src/api/types/packageDetail";

interface LoaderArgs {
  params: Params;
}

export interface DetailLoaderResult {
  detail: PackageDetails;
}

export const detailLoader = async ({ params }: LoaderArgs): Promise<DetailLoaderResult> => {
  const { name } = params;
  if (!name) throw new Error("Name must be provided!");

  const detail = await getPackage(name);
  return {
    detail,
  };
};
