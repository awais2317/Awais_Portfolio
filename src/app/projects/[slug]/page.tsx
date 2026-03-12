import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/lib/data";
import { ProjectCaseStudy } from "./case-study-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${project.subtitle}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
