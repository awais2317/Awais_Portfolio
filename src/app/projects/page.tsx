import type { Metadata } from "next";

import { ProjectsPage } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI and ML projects including RAG pipelines, healthcare automation, voice AI, and more. View detailed case studies with architecture and results.",
};

export default function Page() {
  return <ProjectsPage />;
}
