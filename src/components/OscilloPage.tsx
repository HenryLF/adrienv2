import Image from "next/image";
import { OSCILLOBAT_QUERYResult, Picture } from "../../sanity.types";
import { TextMain } from "./SanityText";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/asset-utils";
import { SanityImage } from "./SanityImage";

export default function OscilloPage({
  data,
}: {
  data: OSCILLOBAT_QUERYResult;
}) {
  return (
    <div className="modal-container justify-center items-center ">
      <h1 className="h1 self-start">Oscillobat</h1>
      {data?.map((slice, key) => {
        if (slice._type == "textblock") {
          return <TextMain content={slice.content ?? []} key={key} />;
        }
        return (
          <SanityImage
            aspectRatioLandscape={null}
            key={key}
            picture={slice as Picture}
            className="w-5/10"
          />
        );
      })}
    </div>
  );
}
