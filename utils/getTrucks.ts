import "server-only";
import { cache } from "react";

export const preloadMobileFacilities = () => {
  void getMobileFacilities();
};

export const getMobileFacilities = cache(async () => {
  const response = await fetch("https://data.sfgov.org/resource/rqzj-sfat.json");
  return response.json();
});
