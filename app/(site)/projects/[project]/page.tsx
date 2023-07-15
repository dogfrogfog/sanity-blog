import { PortableText } from "@portabletext/react";

import { getProject } from "@/sanity/utils";

type ProjectProps = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: ProjectProps) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View project
        </a>
      </header>
      <div className="text-lg text-gray-500 mt-5">
        <PortableText<any> value={project.content} />
      </div>
      {
        // content
      }

      {/* {image} */}
    </>
  );
}
