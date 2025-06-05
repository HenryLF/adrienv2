import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECT_QUERY } from "@/sanity/lib/query";

export default async function Home() {
  const projectData = await client.fetch(ALL_PROJECT_QUERY);

  return (
    <main>
      <section className="section">
        <div className="grid grid-row-dense md:grid-cols-2 lg:grid-cols-3 w-full">
          {projectData.map((project, key) => (
            <div
              className="row-span-1 col-span-1 w-full aspect-[4/3] p-main md:p-small"
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
