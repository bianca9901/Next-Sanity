import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "14zleo9b",
    dataset: "production",
    apiVersion: "2024-03-15",
    useCdn: false
  });

  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "14zleo9b",
    dataset: "production",
    apiVersion: "2024-03-15",
    useCdn: false
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content
            }`,
    { slug }
  );
}
