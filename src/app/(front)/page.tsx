import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ALL_PROJECT_QUERY, BACKGROUND_QUERY } from "@/sanity/lib/query";

export default async function Home() {
  const projectData = await client.fetch(ALL_PROJECT_QUERY);
  const backgroundData = await client.fetch(BACKGROUND_QUERY);

  const backgroundURL =
    backgroundData?.image && urlFor(backgroundData.image).url();

  return (
    <main
      style={{
        backgroundImage: `url(${backgroundURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPositionX : "30%",
        minHeight: "100vh",
      }}
    >
      <Header />
      <section className="section">
        <div className="grid grid-row-dense md:grid-cols-2 lg:grid-cols-3 w-full">
          {projectData.map((project, key) => (
            <div
              className="row-span-1 col-span-1 w-full aspect-[4/3] p-small"
              key={key}
            >
              <ProjectCard data={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
