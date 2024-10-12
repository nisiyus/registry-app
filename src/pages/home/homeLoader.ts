import type { PackageDetails } from "src/api/types/packageDetail";
import { getFeaturedPackages } from "src/api/queries/getFeaturedPackages";

export interface HomeLoaderResult {
  featuredPackages: PackageDetails[];
}

export const homeLoader = async (): Promise<HomeLoaderResult> => {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  };
};
