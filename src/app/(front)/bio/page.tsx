import BioPage from "@/components/BioPage";
import { client } from "@/sanity/lib/client";
import { BIO_QUERY } from "@/sanity/lib/query";
import Link from "next/link";

export default async function Home() {
  const data = await client.fetch(BIO_QUERY);
  if (data)
    return (
      <main>
        <section className="px-large py-main">
          <BioPage data={data} />
        </section>
      </main>
    );
  return (
    <main>
      <Link href="/">
        <section className="section flex-col items-center justify-center">
          <h1 className="h1">Mmmmh 404....</h1>
          <h2 className="h2">On retourne dans les bon rails ?</h2>
        </section>
      </Link>
    </main>
  );
}
