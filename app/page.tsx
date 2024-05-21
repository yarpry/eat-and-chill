import Image from "next/image";

import { getMobileFacilities, preloadMobileFacilities } from "@/utils/getTrucks";
import HereMap from "@/app/components/HereMap";
import { MobileFacility } from "@/types/mobileFacility";

export default async function Home() {
  preloadMobileFacilities();

  const mobileFacilities: MobileFacility[] = await getMobileFacilities();

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          className="
            fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200
            pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static
            lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
          "
        >
          Find your perfect lunch spot near park zones:
        </p>
        <div
          className="
            fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white
            via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none
          "
        >
          <Image
            src="/logo.png"
            alt="Food Ai"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>

      <HereMap mobileFacilities={mobileFacilities} />
    </main>
  );
}
