"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { projects } from "@/lib/data";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard, FeaturedProjectCard } from "@/components/project-card";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Projects listing page with filtering
 */
export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState<string>("All");
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <Section className="neural-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Project{" "}
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Production-grade AI systems designed for scale, reliability, and
              real-world impact. Each project includes detailed case studies.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section>
          <SectionHeader
            subtitle="Featured"
            title="Highlighted Work"
            description="My most impactful projects with detailed case studies"
          />
          <StaggerContainer className="space-y-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <FeaturedProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <Section className="bg-accent/30">
          <SectionHeader
            subtitle="More Projects"
            title="Additional Work"
            description="Other notable projects and experiments"
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Section>
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        </Section>
      )}

      {/* Highlights Section */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Client-Focused Delivery",
              detail: "Built for business outcomes and real-world usage",
            },
            {
              title: "Production Mindset",
              detail: "Scalable architecture, observability, and reliability",
            },
            {
              title: "AI + Backend Expertise",
              detail: "From LLM pipelines to API and deployment",
            },
            {
              title: "End-to-End Execution",
              detail: "Discovery, build, optimization, and handover",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50"
            >
              <div className="text-base md:text-lg font-semibold text-primary">
                {item.title}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
