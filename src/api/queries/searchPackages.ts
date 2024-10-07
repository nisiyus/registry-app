import { PackageSummary } from "../types";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export const searchPackages = async (term: string): Promise<PackageSummary[]> => {
  const resp = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`);

  const data: SearchResponse = await resp.json();
  return data.objects.map(({ package: { name, description, version, keywords } }) => {
    return {
      name,
      description,
      version,
      keywords,
    };
  });
};
