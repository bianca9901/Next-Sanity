import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello, I&apos;m{" "}
        <span
          className="bg-gradient-to-r from-orange-400 to-purple-600
         via-red-500 bg-clip-text text-transparent"
        >
          Bianca!
        </span>
      </h1>
      <p className="mt-3 texl-xl text-gray-600">Check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div
              className="mt-2 font-extrabold bg-gradient-to-r from-orange-400
           to-purple-600 via-red-500 bg-clip-text text-transparent"
            >
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
