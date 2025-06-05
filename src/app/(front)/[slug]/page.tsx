import ProjectPage from "@/components/ProjectPage";
import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/query";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await client.fetch(PROJECT_QUERY, { slug });
  if (data)
    return (
      <main>
        <section className="px-large py-main">
          <ProjectPage data={data} />
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
