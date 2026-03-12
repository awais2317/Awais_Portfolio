"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Layers,
  Target,
  Sparkles,
  Network,
} from "lucide-react";

import { projects } from "@/lib/data";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectCaseStudyProps {
  project: (typeof projects)[0];
}

/**
 * Detailed case study page for individual projects
 */
export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  // Find prev/next projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      {/* Hero Section */}
      <Section className="neural-bg">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-12">
              {project.links?.github && project.links.github !== "#" && (
                <Button asChild variant="outline">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.links?.demo && project.links.demo !== "#" && (
                <Button asChild>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {project.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 md:p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-4xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Video Demo Section */}
      {project.assets?.video && (
        <Section className="bg-accent/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Demo"
              title="See It In Action"
              description="Watch how the system works"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-border/50"
            >
              <video
                controls
                controlsList="nodownload"
                className="w-full aspect-video bg-black"
                poster={project.assets.poster}
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={project.assets.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </Section>
      )}

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <Section>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Capabilities"
              title="Key Features"
              description="What makes this system powerful"
            />
            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>
      )}

      {/* Model Architecture Section */}
      {project.modelArchitecture && project.modelArchitecture.length > 0 && (
        <Section className="bg-accent/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="AI Pipeline"
              title="Model Architecture"
              description="Multi-model AI system combining state-of-the-art architectures"
            />
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-chart-3/10">
                    <Network className="h-5 w-5 text-chart-3" />
                  </div>
                  <CardTitle>AI Components</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {project.modelArchitecture.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-chart-3/20 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>
      )}

      {/* Technologies */}
      <Section className="bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Stack"
            title="Technologies Used"
            description="The tools and frameworks powering this project"
          />
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-card/50"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Study Content */}
      {project.caseStudy && (
        <>
          {/* Problem */}
          <Section>
            <div className="max-w-4xl mx-auto">
              <StaggerContainer>
                <StaggerItem>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-destructive/10">
                          <AlertCircle className="h-5 w-5 text-destructive" />
                        </div>
                        <CardTitle>The Problem</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </Section>

          {/* Solution & Architecture */}
          <Section className="bg-accent/30">
            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="space-y-8">
                {/* Solution */}
                <StaggerItem>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>The Solution</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Architecture */}
                <StaggerItem>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-chart-2/10">
                          <Layers className="h-5 w-5 text-chart-2" />
                        </div>
                        <CardTitle>Architecture</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.caseStudy.architecture.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </Section>

          {/* Challenges & Results */}
          <Section>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <FadeIn>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Challenges Overcome</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.caseStudy.challenges.map((challenge, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-chart-4 mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* Results */}
                <FadeIn delay={0.1}>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Results Achieved</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.caseStudy.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </Section>
        </>
      )}

      {/* Project Report Section */}
      {project.assets?.report && (
        <Section>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Documentation"
              title="Project Report"
              description="Detailed technical documentation and research"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-border/50"
            >
              <iframe
                src={`${project.assets.report}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-[600px] md:h-[800px] bg-white"
                onContextMenu={(e) => e.preventDefault()}
                style={{ pointerEvents: 'auto' }}
              />
            </motion.div>
          </div>
        </Section>
      )}

      {/* Navigation */}
      <Section className="bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs uppercase tracking-wide">Previous</div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-right sm:text-left sm:flex-row-reverse"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs uppercase tracking-wide">Next</div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
