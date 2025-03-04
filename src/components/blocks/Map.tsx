"use client";

import { Page, PointOfInterest } from "@/types/page";
import Button from "../ui/Button";
import Image from "next/image";
import {
  Aim,
  Mountain,
  PinAim,
  PinFish,
  PinMountain,
  Whale,
} from "../ui/Icons";
import * as React from "react";
import MapBox, { Marker } from "react-map-gl/mapbox";
import AnimatedBlock from "../ui/Animated";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import positions from "@/constant/randomPosition.json";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MapProps {
  data: Page["bloc_2"];
  mark: Page["carte_point"];
}

const Map: React.FC<MapProps> = ({ data, mark }) => {
  const [activities, setActivities] = React.useState<string[]>(data?.cases);
  const [selected, setSelected] = React.useState<string>(data?.cases?.[0]);
  const [selectedMark, setSelectedMark] = React.useState<PointOfInterest>();

  const icons = [<Mountain />, <Whale />, <Aim />];
  const markIcons = [<PinMountain />, <PinFish />, <PinAim />];

  React.useEffect(() => {
    setActivities(data?.cases);
    setSelected(data?.cases?.[0]);
  }, [data?.cases]);

  return (
    <AnimatedBlock>
      <div className="bg-floral-white relative">
        <div className="absolute w-full h-full inset-0 opacity-[0.03]">
          <Image
            src="/images/mountain.png"
            fill
            alt="map"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto lg:py-20 py-10 relative z-10">
          <div className="flex flex-col gap-10 items-center">
            <h2 className="text-main-orange divider text-center w-full">
              <span>{data?.title}</span>
            </h2>
            <div className="flex justify-center flex-wrap gap-5 items-center">
              {activities.map((caseItem, idx) => (
                <Button
                  variant="outline"
                  className={twMerge(
                    "bg-lotion border-main-orange/50 font-medium flex gap-2 items-center",
                    selected === caseItem && "bg-main-orange text-white"
                  )}
                  key={caseItem}
                  onClick={() => setSelected(caseItem)}
                >
                  {icons[idx]}
                  <span>{caseItem}</span>
                </Button>
              ))}
            </div>
            <div className="relative w-full md:h-[500px] h-[200px] rounded-2xl mt-10 overflow-hidden">
              <div className="absolute w-full h-full inset-0">
                <Image
                  src="/images/map.png"
                  fill
                  alt="map"
                  className="object-cover"
                />
              </div>
              {mark
                ?.filter((item) => item?.activities?.includes(selected))
                ?.map((item, idx) => (
                  <button
                    key={idx}
                    style={{
                      top: `${
                        positions.slice(
                          (activities.indexOf(selected) + 1) * 20
                        )[idx].top
                      }%`,
                      left: `${
                        positions.slice(
                          (activities.indexOf(selected) + 1) * 20
                        )[idx].left
                      }%`,
                    }}
                    className="absolute z-[100]"
                    // onClick={() => {
                    //   setActivities(item?.activities);
                    // }}
                    onClick={() => {
                      setSelectedMark(item);
                    }}
                  >
                    {markIcons[activities.indexOf(selected)]}
                  </button>
                ))}
            </div>
            {/* <MapBox
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
              initialViewState={{
                // longitude: 47.23965,
                // latitude: -69.6816,
                latitude: 47.4157316,
                longitude: -70.7700311,
                zoom: 6,
              }}
              style={{ width: "100%", height: 500, borderRadius: 20 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              {mark?.map((item, idx) => (
                <Marker
                  key={idx}
                  className="z-[100]"
                  onClick={() => {
                    setActivities(item?.activities);
                  }}
                  latitude={
                    parseInt(item?.coordinates?.latitude as string) || 0
                  }
                  longitude={parseInt(item?.coordinates?.longitude || "") || 0}
                >
                  <button
                    onClick={() => {
                      setActivities(item?.activities);
                    }}
                  >
                    <PinMountain />
                  </button>
                </Marker>
              ))}
            </MapBox> */}
          </div>
        </div>
      </div>
      <Dialog
        open={!!selectedMark}
        onOpenChange={() => setSelectedMark(undefined)}
      >
        <DialogContent className="flex flex-col gap-10">
          <DialogTitle>{selectedMark?.name}</DialogTitle>
          <Image
            src={"/images/drone.png"}
            height={300}
            width={200}
            className="object-cover w-full rounded-xl "
            alt={selectedMark?.name as string}
          />
          <div className="flex flex-col gap-4 pb-10">
            {selectedMark?.address && (
              <DialogDescription className="flex gap-2">
                <span className="w-1/6">Address:</span>
                <span className="font-medium w-5/6">
                  {selectedMark?.address}
                </span>
              </DialogDescription>
            )}
            {(selectedMark?.activities as string[])?.length > 0 && (
              <DialogDescription className="flex gap-2">
                <span className="w-1/6">Activities:</span>
                <span className="flex flex-col gap-2 w-5/6">
                  {selectedMark?.activities.map((item, idx) => (
                    <span key={idx} className="font-medium">
                      {item}
                    </span>
                  ))}
                </span>
              </DialogDescription>
            )}
            {selectedMark?.website && (
              <DialogDescription className="flex gap-2">
                <span className="w-1/6">Website:</span>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={selectedMark?.website}
                  className="font-medium text-blue-500 w-5/6"
                >
                  {selectedMark?.website}
                </Link>
              </DialogDescription>
            )}
            {selectedMark?.phone && (
              <DialogDescription className="flex gap-2">
                <span className="w-1/6">Tel:</span>
                {Array.isArray(selectedMark?.phone) ? (
                  <span className="flex flex-col gap-2 w-5/6">
                    {selectedMark?.phone.map((item, idx) => (
                      <Link
                        key={idx}
                        className="font-medium text-blue-500"
                        href={`tel:${item}`}
                      >
                        {item}
                      </Link>
                    ))}
                  </span>
                ) : (
                  <span className="font-medium w-5/6 text-blue-500">
                    {selectedMark?.phone}
                  </span>
                )}
              </DialogDescription>
            )}
            {selectedMark?.email && (
              <DialogDescription className="flex gap-2">
                <span className="w-1/6">Email:</span>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`mailto:${selectedMark?.email}`}
                  className="font-medium text-blue-500 w-5/6"
                >
                  {selectedMark?.email}
                </Link>
              </DialogDescription>
            )}
          </div>
          {/* Add other mark information here */}
        </DialogContent>
      </Dialog>
    </AnimatedBlock>
  );
};

export default Map;
