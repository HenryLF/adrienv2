"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Picture } from "../../sanity.types";
import { useState } from "react";
import { getImageDimensions, SanityImageSource } from "@sanity/asset-utils";

type PropType = {
  picture: Picture;
  creditRight?: boolean;
  className: string;
};

export function SanityImage({
  picture,
  creditRight = false,
  className = "",
}: PropType) {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  const { image } = picture;
  if (!image) return <></>;
  const { aspectRatio } = getImageDimensions(image as SanityImageSource);

  const isSquare = Math.abs(aspectRatio - 1) < 0.1;
  if (picture?.image)
    return (
      <div
        className={className}
        style={{
          aspectRatio: isSquare ? 1 : aspectRatio < 1 ? "3/4" : "4/3",
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Image
          src={urlFor(picture.image).url()}
          fill
          className="object-cover"
          alt={picture.alt ?? ""}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`credit ${mouseOver ? "-translate-y-0" : "-translate-y-full"}
             transition-transform duration-500 ease-in-out
             ${creditRight ? "left-0" : "right-0"} top-0
             `}
        >
          {picture.credit && `crédit : ${picture.credit}`}
        </div>
      </div>
    );
  return <></>;
}
