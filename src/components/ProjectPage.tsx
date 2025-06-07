import { PROJECT_QUERYResult } from "../../sanity.types";
import { SanityImage } from "./SanityImage";
import { TextMain } from "./SanityText";
import VideoPlayer from "./VideoPlayer";

function camelCase(s: string | null | undefined) {
  if (!s) return "";
  return s[0].toUpperCase() + s.slice(1);
}

type PropType = { data: PROJECT_QUERYResult };
export default function ProjectPage({ data }: PropType) {
  return (
    <div className="modal-container">
      <div className="flex flex-col items-center">
        <h2 className="h2">{data?.name}</h2>
        <h3 className="h3 ">{data?.place}</h3>
        <h3 className="h3">{data?.year}</h3>
      </div>
      <TextMain content={data?.description ?? []} />
      <div className="flex flex-col space-y-small px-main">
        {data?.pictures?.map((pic, key) => {
          if (key == 0) {
            return (
              <SanityImage
                picture={pic}
                key={key}
                aspectRatioLandscape={null}
                className="w-full"
              />
            );
          }
          return <SanityImage picture={pic} key={key} className="w-3/5" />;
        })}
      </div>
      <div className="flex flex-col ml-large">
        <span className="main-text">{data?.name}</span>
        <span className="main-text">{camelCase(data?.materials?.join(", "))}</span>
        <span className="main-text">{data?.dimension}</span>
      </div>
      {data?.video?.video?.asset?.url && (
        <div className="p-small">
          <h3 className="h3"> {data.video.title} </h3>
          <VideoPlayer
            url={data.video.video.asset.url}
            className="md:max-w-4/5 lg:max-w-3/5"
          />
        </div>
      )}
    </div>
  );
}
