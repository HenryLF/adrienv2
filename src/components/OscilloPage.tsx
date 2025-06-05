import Image from "next/image";
import { OSCILLOBAT_QUERYResult, Picture } from "../../sanity.types";
import { SanityImage } from "./SanityImage";
import { TextMain } from "./SanityText";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/asset-utils";

export default function OscilloPage({
  data,
}: {
  data: OSCILLOBAT_QUERYResult;
}) {
  console.log(data);
  return (
    <div className="modal-container justify-center items-center ">
      <h1 className="h1 self-start">Oscillobat</h1>
      {data?.map((slice, key) => {
        if (slice._type == "textblock") {
          return <TextMain content={slice.content ?? []} key={key} />;
        }
        return (
          <Image
            src={urlFor(slice.image as SanityImageSource).url()}
            height={100}
            width={100}
            alt={slice.alt ?? "Une photo de l'Oscillobat."}
            className="w-8/10 h-auto"
          />
        );
      })}
    </div>
  );
}
