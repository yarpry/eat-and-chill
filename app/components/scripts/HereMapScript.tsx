"use client";

import Script from "next/script";

const HereMapScript = () => (
  <>
    <Script
      src={"https://js.api.here.com/v3/3.1/mapsjs-core.js"}
      strategy="beforeInteractive"
    />
    <Script
      src={"https://js.api.here.com/v3/3.1/mapsjs-service.js"}
      strategy="beforeInteractive"
    />
    <Script
      src={"https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"}
      strategy="beforeInteractive"
    />
    <Script
      src={"https://js.api.here.com/v3/3.1/mapsjs-ui.js"}
      strategy="beforeInteractive"
    />
    <Script
      src={"https://js.api.here.com/v3/3.1/mapsjs-clustering.js"}
      strategy="beforeInteractive"
    />
  </>
);

export default HereMapScript;
