import Image from "next/image";
import Link from "next/link";
import ClickableModal from "./ClickableModal";
import { client } from "@/sanity/lib/client";
import { BIO_QUERY, PORTFOLIO_QUERY } from "@/sanity/lib/query";
import BioPage from "./BioPage";

export default async function Header() {
  const bioData = await client.fetch(BIO_QUERY);
  const portfolioData = await client.fetch(PORTFOLIO_QUERY);
  return (
    <header
      className="flex flex-row flex-wrap justify-between items-center 
    min-h-large w-full space-x-small"
    >
      <Link href="/">
        <h1 className="h1 ">Adrien Milon</h1>
      </Link>
      
      <div className="flex flex-row justify-evenly items-center flex-1">
        <Link href={portfolioData?.asset?.url ?? "/"}>
          <span className="header-link">PortFolio</span>
        </Link>

        <ClickableModal content={<BioPage data={bioData} />}>
          <span className="header-link">BIO</span>
        </ClickableModal>

        <ClickableModal content={<BioPage data={bioData} />}>
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
            className="min-size-5 "
          />
        </Link>
      </div>
    </header>
  );
}
