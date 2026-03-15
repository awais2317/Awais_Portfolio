"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  ExternalLink,
  ChevronDown,
  Brain,
  Cpu,
  Zap,
} from "lucide-react";

import { siteConfig, projects, experiences, skills } from "@/lib/data";
import { HeroSection, Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard, FeaturedProjectCard } from "@/components/project-card";
import { MetricGrid } from "@/components/metric-card";
import { SkillsGrid } from "@/components/skills-grid";
import { ParticleBackground } from "@/components/particle-background";

/**
 * Home page with hero section, featured projects, and quick links
 */
export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const heroMetrics = [
    { metric: "95%+", label: "Automation Accuracy" },
    { metric: "60+", label: "Projects Delivered" },
    { metric: "1000+", label: "Docs Indexed" },
    { metric: "92%", label: "AI Coding Accuracy" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <ParticleBackground />
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-1.5 text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Available for new projects
              </Badge>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I&apos;m{" "}
                <span className="gradient-text">{siteConfig.name}</span>
              </h1>

              {/* Title */}
              <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
                {siteConfig.title}
              </p>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                {siteConfig.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/AWAIS WAQAR  AI Engineer.pdf" download="AWAIS WAQAR  AI Engineer.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a
                    href={siteConfig.links.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Upwork
                  </a>
                </Button>
              </div>

              {/* Quick metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {heroMetrics.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="text-center p-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {item.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Profile visual container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30"
                />

                {/* Center circle with profile photo */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 via-accent to-secondary/20 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image
                      src="/profile.png"
                      alt={siteConfig.name}
                      fill
                      className="object-cover scale-105"
                      style={{ objectPosition: "center 20%" }}
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 right-12 p-3 rounded-xl bg-card border border-border shadow-lg"
                >
                  <Cpu className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 left-12 p-3 rounded-xl bg-card border border-border shadow-lg"
                >
                  <Zap className="w-6 h-6 text-chart-2" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </HeroSection>

      {/* Featured Projects Section */}
      <Section className="bg-accent/30">
        <SectionHeader
          subtitle="Portfolio"
          title="Featured Projects"
          description="Production-grade AI systems built for scale and real-world impact"
          align="center"
        />

        <StaggerContainer className="space-y-8">
          {/* First featured project - large card */}
          <StaggerItem>
            <FeaturedProjectCard project={featuredProjects[0]} />
          </StaggerItem>

          {/* Other featured projects - grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.slice(1).map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} index={index} />
              </StaggerItem>
            ))}
          </div>

          {/* View all link */}
          <FadeIn className="text-center pt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </StaggerContainer>
      </Section>

      {/* Experience Highlight */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Experience"
              title="Building Production AI at Scale"
              description="Currently leading AI initiatives at CareCloud, focusing on healthcare automation and intelligent document processing systems."
            />

            <FadeIn delay={0.2}>
              <div className="space-y-4 mb-8">
                {experiences[0].achievements.slice(0, 3).map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link href="/experience">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          <FadeIn direction="left">
            <MetricGrid
              metrics={
                experiences[0].highlights?.map((h) => ({
                  metric: h.metric,
                  label: h.label,
                  description: h.description,
                })) || []
              }
              className="grid-cols-2"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Skills Preview */}
      <Section className="bg-accent/30">
        <SectionHeader
          subtitle="Expertise"
          title="Technical Skills"
          description="Specialized in AI/ML systems, backend development, and production deployments"
          align="center"
        />

        <SkillsGrid skills={skills} />

        <FadeIn className="text-center pt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/skills">
              View Full Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Looking for an AI engineer to bring your vision to life? I
              specialize in production-grade AI systems that deliver real
              business value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
