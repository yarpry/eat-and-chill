import { useEffect, useState } from "react";

import { changeStyle, styleChangeHandler, tapListener } from "@/utils/hereMapUtils";
import { DEFAULT_NEW_MAP_SETTINGS } from "@/config/constants";
import { MobileFacility } from "@/types/mobileFacility";

const useHereMap = (mobileFacilities: MobileFacility[]) => {
  const [currentMobileFacility, setCurrentMobileFacility] = useState<MobileFacility | null>(null);

  useEffect(() => {
    const platform = new H.service.Platform({
      apikey: process.env.NEXT_PUBLIC_HEREMAP_API_KEY,
    });

    const defaultLayers = platform.createDefaultLayers();
    const approvedMobileFacilitiesDataPoints = mobileFacilities.map(
      (facility) =>
        new H.clustering.DataPoint(
          facility.latitude,
          facility.longitude,
          1,
          facility
        )
    );

    const clusteredDataProvider = new H.clustering.Provider(approvedMobileFacilitiesDataPoints);
    const clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);

    const mapInstance = new H.Map(
      document.getElementById("mapContainer"),
      defaultLayers.vector.normal.map,
      {
        ...DEFAULT_NEW_MAP_SETTINGS,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    mapInstance.addLayer(clusteringLayer);

    window.addEventListener("resize", () => mapInstance.getViewPort().resize());

    new H.mapevents.Behavior(new H.mapevents.MapEvents(mapInstance));
    new H.ui.UI.createDefault(mapInstance, defaultLayers);

    clusteredDataProvider.addEventListener("tap", (event: HereMapEvent) => tapListener(event, setCurrentMobileFacility));

    const style = mapInstance.getBaseLayer().getProvider().getStyle();
    if (style.getState() === H.map.render.Style.State.READY) {
      changeStyle(style);
    } else {
      style.addEventListener("change", styleChangeHandler);
    }

    return () => {
      style.removeEventListener("change", styleChangeHandler);
      mapInstance.dispose();
      window.removeEventListener("resize", () => mapInstance.getViewPort().resize());
    };
  }, [mobileFacilities]);

  return currentMobileFacility;
};

export default useHereMap;
