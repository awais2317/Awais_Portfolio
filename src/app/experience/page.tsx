import type { Metadata } from "next";

import { ExperiencePage } from "./experience-client";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in AI engineering, LLM systems, and healthcare automation. View my work at CareCloud and freelance projects.",
};

export default function Page() {
  return <ExperiencePage />;
}
