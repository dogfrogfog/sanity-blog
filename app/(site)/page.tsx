import { getProjects } from "@/sanity/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Maks
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        I&apos;m a full-stack developer go check out what we can do together
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="shadow-md rounded-lg cursor-pointer border hover:border-blue-500 hover:scale-105 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="static object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent p-4">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export const revalidate = 60;
