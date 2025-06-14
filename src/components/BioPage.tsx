
import { BIO_QUERYResult } from "../../sanity.types";
import { TextHead, TextMain } from "./SanityText";

export default function BioPage({ data }: { data: BIO_QUERYResult }) {
  return (
    <div className="modal-container justify-center items-center ">
      <TextHead content={data?.head ?? []} maxWidth="80%"/>
      <TextMain content={data?.main ?? []} maxWidth="90%"/>
    </div>
  );
}
