import { OSCILLOBAT_QUERYResult, Picture } from "../../sanity.types";
import { TextMain } from "./SanityText";
import { SanityImage } from "./SanityImage";
import VideoPlayer from "./VideoPlayer";

export default function OscilloPage({
  data,
}: {
  data: OSCILLOBAT_QUERYResult;
}) {
  return (
    <div className="modal-container">
      <h1 className="h1">Oscillobat</h1>
      <div className="flex flex-col space-y-small items-center" >
        {data?.map((slice, key) => {
          switch (slice._type) {
            case "textblock":
              return <TextMain content={slice.content ?? []} key={key} />;
            case "picture":
              return (
                <SanityImage
                  aspectRatioLandscape={null}
                  key={key}
                  picture={slice as Picture}
                  className="w-8/10 xl:w-6/10"
                />
              );
            case "video":
              return (
                <VideoPlayer
                  url={slice.video.asset.url}
                  key={key}
                  className="w-8/10 xl:w-6/10"
                />
              );
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
}
