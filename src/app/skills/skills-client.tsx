"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { skills } from "@/lib/data";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";
import { SkillsGrid } from "@/components/skills-grid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Skills page with detailed skill categories
 */
export function SkillsPage() {
  // Core competencies for quick overview
  const coreCompetencies = [
    "Large Language Models",
    "RAG Pipelines",
    "Healthcare AI",
    "Production Systems",
    "API Development",
    "Vector Databases",
  ];

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
              Technical{" "}
              <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specialized in AI/ML systems with expertise spanning from research
              to production deployment.
            </p>

            {/* Core Competencies */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {coreCompetencies.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-1.5 text-sm"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="/AWAIS WAQAR  AI Engineer.pdf" download="AWAIS WAQAR  AI Engineer.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section>
        <SectionHeader
          subtitle="Expertise"
          title="Skill Categories"
          description="Organized by area of specialization with proficiency levels"
          align="center"
        />
        <SkillsGrid skills={skills} />
      </Section>

      {/* Proficiency Legend */}
      <Section className="bg-accent/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            subtitle="Guide"
            title="Proficiency Levels"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-3">
                  Expert
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Deep expertise with production experience. Can architect
                  complex systems and mentor others.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 mb-3">
                  Advanced
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Strong proficiency with significant project experience.
                  Comfortable with complex implementations.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Badge className="bg-chart-4/20 text-chart-4 border-chart-4/30 mb-3">
                  Intermediate
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Solid understanding with hands-on experience. Actively
                  expanding knowledge.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need These Skills?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m available for AI engineering projects, consulting, and
              full-time opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/experience">View Experience</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
