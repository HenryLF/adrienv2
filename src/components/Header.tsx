import Image from "next/image";
import Link from "next/link";
import ClickableModal from "./ClickableModal";
import { client } from "@/sanity/lib/client";
import {
  BIO_QUERY,
  OSCILLOBAT_QUERY,
  PORTFOLIO_URL_QUERY,
} from "@/sanity/lib/query";
import BioPage from "./BioPage";
import OscilloPage from "./OscilloPage";

export default async function Header() {
  const bioData = await client.fetch(BIO_QUERY);
  const portfolioUrl = await client.fetch(PORTFOLIO_URL_QUERY);
  const oscilloData = await client.fetch(OSCILLOBAT_QUERY);
  return (
    <header
      className="flex flex-row flex-wrap justify-between items-center 
    min-h-large w-full space-x-small"
    >
      <Link href="/">
        <h1 className="h1 pl-small">Adrien Milon</h1>
      </Link>

      <div className="flex flex-row justify-evenly items-center flex-1">
        <span className="header-link">
          <Link href={portfolioUrl ?? "/"}>PortFolio </Link>
        </span>

        <ClickableModal content={<BioPage data={bioData} />}>
          <span className="header-link">Bio</span>
        </ClickableModal>

        <ClickableModal content={<OscilloPage data={oscilloData} />}>
          <span className="header-link">Oscillobat</span>
        </ClickableModal>

        <ClickableModal content={<BioPage data={bioData} />}>
          <span className="header-link">Contact</span>
        </ClickableModal>

        <Link href={"https://www.instagram.com/adrien__milon/"}>
          <Image
            src="/instagram.svg"
            height={50}
            width={50}
            alt="instagram logo"
            className="min-size-5"
          />
        </Link>
      </div>
    </header>
  );
}
