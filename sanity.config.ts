import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
  projectId: "14zleo9b",
  dataset: "production",
  title: "Learn Sanity",
  apiVersion: "2024-03-15",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
  useCdn: false
});

export default config;
