"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/tilt-card";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    featured: boolean;
    category: string;
    technologies: string[];
    metrics: { label: string; value: string }[];
    links?: {
      github?: string;
      demo?: string;
    };
  };
  index?: number;
}

/**
 * Premium project card with 3D tilt effect, hover animations and metrics display
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <TiltCard tiltAmount={8} scale={1.02}>
        <Link href={`/projects/${project.id}`} className="block h-full">
          <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Image section with gradient */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/50 to-secondary overflow-hidden">
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-contain object-center p-2 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-background/10 to-transparent z-10" />
              
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: "linear-gradient(45deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2), rgba(167,139,250,0.1))",
                }}
              />
              
              {/* Category badge */}
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm"
              >
                {project.category}
              </Badge>

              {/* Featured badge */}
              {project.featured && (
                <Badge className="absolute top-4 right-4 z-20">Featured</Badge>
              )}
            </div>

            <CardContent className="p-6">
              {/* Title and subtitle */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs font-normal"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs font-normal">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            {/* View case study link */}
            <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
              View Case Study
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

/**
 * Featured project card with larger layout
 */
export function FeaturedProjectCard({ project }: ProjectCardProps) {
  const hasPublicGithub = Boolean(
    project.links?.github && project.links.github !== "#"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/projects/${project.id}`}>
        <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image section */}
            <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-primary/10 via-accent to-secondary overflow-hidden">
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 z-10 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent z-10 md:hidden" />
              
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm"
              >
                {project.category}
              </Badge>

              <Badge className="absolute top-4 right-4 z-20">Featured</Badge>
            </div>

            {/* Content section */}
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-1 mb-4">
                {project.subtitle}
              </p>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <Button className="group/btn">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                {hasPublicGithub && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.links?.github, "_blank");
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
