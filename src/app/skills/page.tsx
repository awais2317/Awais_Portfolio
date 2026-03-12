import type { Metadata } from "next";

import { SkillsPage } from "./skills-client";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills in AI/ML, LLMs, RAG pipelines, Python, FastAPI, and more. Expert-level proficiency in production AI systems.",
};

export default function Page() {
  return <SkillsPage />;
}
