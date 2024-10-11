import { searchPackages } from "src/api/queries/searchPackages";
import { PackageSummary } from "src/api/types";

export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

export const searchLoader = async ({ request }: { request: Request }): Promise<SearchLoaderResult> => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided");
  }

  const results = await searchPackages(term);
  return { searchResults: results };
};
