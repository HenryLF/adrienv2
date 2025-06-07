"use client";

import isTouchDevice from "@/app/lib/isTouchDevice";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
type PropType = {
  url: string;
  className?: string;
};
export default function VideoPlayer({ url, className }: PropType) {
  const [client, isClient] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    isClient(true);
    setMouseOver(isTouchDevice());
  }, []);
  return (
    <div
      className={className}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {client && (
        <ReactPlayer
          url={url}
          controls={mouseOver}
          width="100%"
          height="auto"
        />
      )}
    </div>
  );
}
