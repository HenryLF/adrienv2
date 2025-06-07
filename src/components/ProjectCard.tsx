"use client";

import Image from "next/image";
import { PROJECT_QUERYResult } from "../../sanity.types";
import { useEffect, useReducer, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import ProjectPage from "./ProjectPage";
import ClickableModal from "./ClickableModal";
import { SanityImageSource } from "@sanity/asset-utils";
import isTouchDevice from "@/app/lib/isTouchDevice";
type PropType = {
  data?: PROJECT_QUERYResult;
};

const TRANSITION_DURATION = 5_000;

export default function ProjectCard({ data }: PropType) {
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    setMouseOver(isTouchDevice());
  }, []);

  const picturesLength = data?.pictures?.length ?? 1;
  const randomSeed = useRef<number>(Math.random() * 0.2 + 1);
  const timer = useRef<number | null>(null);

  const [activeIndex, incrementActiveIndex] = useReducer(
    (index, p) => (picturesLength + index + p) % picturesLength,
    0
  );

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      incrementActiveIndex,
      TRANSITION_DURATION * randomSeed.current,
      1
    );
  }, [activeIndex]);

  if (!data) return;
  return (
    <ClickableModal content={<ProjectPage data={data} />}>
      <div
        className="size-full overflow-hidden relative"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {
          <Image
            src={urlFor(data.pictures?.at(0)?.image as SanityImageSource).url()}
            fill
            className="object-cover"
            alt={data?.pictures?.at(0)?.alt ?? ""}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        }
        <div
          className={`min-h-1/5 w-full bottom-0 left-0 absolute p-2
            ${mouseOver ? "translate-0" : "translate-y-full"}
            transition-transform duration-500 ease-in-out
            backdrop-blur
            dotborder border-t-2
            `}
        >
          <h2 className="h2">{data?.name}</h2>
          <h3 className="h3">{data?.year}</h3>
        </div>
      </div>
    </ClickableModal>
  );
}
