import { MobileFacility } from "@/types/mobileFacility";
import { PARK_ZONE_COLOR } from "@/config/constants";

export const changeStyle = (style: HereMapStyle) => {
  const parkConfig = style.extractConfig(["landuse.park"]);
  parkConfig.layers.landuse.park.draw.polygons.color = PARK_ZONE_COLOR;
  style.mergeConfig(parkConfig);
};

export const styleChangeHandler = (event: HereMapEvent) => {
  const style = event.target;

  if (style.getState() === H.map.render.Style.State.READY) {
    style.removeEventListener("change", styleChangeHandler);
    changeStyle(style);
  }
};

export const tapListener = (event: HereMapEvent, setCurrentMobileFacility: (facility: MobileFacility) => void) => {
  const marker = event.target;
  const point = marker.getData();
  const isCluster = point.isCluster();

  if (!isCluster) {
    const facility = point?.getData();
    setCurrentMobileFacility(facility);
  }
};
