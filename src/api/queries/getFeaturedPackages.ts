import type { PackageDetails } from "../types/packageDetail";

const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export const getFeaturedPackages = async () => {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const respon = await fetch(`https://registry.npmjs.org/${name}`);
    return respon.json();
  });

  const data = await Promise.all(promises);
  return data as PackageDetails[];
};
