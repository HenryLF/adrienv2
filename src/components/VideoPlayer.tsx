"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
type PropType = {
  url: string;
  className?: string;
};
export default function VideoPlayer({ url, className }: PropType) {
  const [client, isClient] = useState(false);
  useEffect(() => {
    isClient(true);
  }, []);
  return (
    <div className={className}>
      {client && (
        <ReactPlayer url={url} controls={true} width="100%" height="auto" />
      )}
    </div>
  );
}
