import type { PackageDetails } from "../types/packageDetail";

export const getPackage = async (name: string): Promise<PackageDetails> => {
  const respon = await fetch(`https://registry.npmjs.org/${name}`);
  const data = await respon.json();

  return data as PackageDetails;
};
