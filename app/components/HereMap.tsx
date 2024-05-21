"use client";

import { useMemo } from "react";

import { MobileFacility } from "@/types/mobileFacility";
import useHereMap from "@/app/components/hooks/useHereMap";

type HereMapProps = {
  mobileFacilities: MobileFacility[];
};

const HereMap = ({ mobileFacilities }: HereMapProps) => {
  const approvedMobileFacilities = useMemo(
    () => mobileFacilities.filter((facility) => facility.status === "APPROVED"),
    [mobileFacilities]
  );
  const currentMobileFacility = useHereMap(approvedMobileFacilities);

  const { applicant, fooditems } = currentMobileFacility || {};

  return (
    <div className="flex my-5">
      <div
        className="h-[500px] w-[500px] border-2 border-gray-300"
        id="mapContainer"
      />
      <div className="h-[500px] w-[500px] ml-5">
        {(applicant || fooditems) ? (
          <div className="bg-black p-4 rounded shadow text-white">
            <h2 className="text-lg font-semibold">{applicant}</h2>
            <p><strong>Food Items:</strong> {fooditems}</p>
          </div>
        ) : (
          <div className="bg-black p-4 rounded shadow text-white">
            <p>Please select a mobile food facility to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HereMap;
