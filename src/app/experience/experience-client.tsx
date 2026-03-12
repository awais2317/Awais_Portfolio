"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { experiences } from "@/lib/data";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";
import { ExperienceTimeline } from "@/components/experience-card";
import { Button } from "@/components/ui/button";
import { MetricGrid } from "@/components/metric-card";

/**
 * Experience page showcasing professional history
 */
export function ExperiencePage() {
  // Aggregate key metrics from all experiences
  const keyMetrics = [
    {
      metric: "95%+",
      label: "Automation Accuracy",
      description: "AI contract intelligence platform",
    },
    {
      metric: "80%",
      label: "Review Reduction",
      description: "Manual contract processing",
    },
    {
      metric: "60+",
      label: "Projects Delivered",
      description: "Freelance & enterprise work",
    },
    {
      metric: "90%+",
      label: "Client Satisfaction",
      description: "Upwork client reviews",
    },
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
              Professional{" "}
              <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building production-grade AI systems for healthcare automation,
              document intelligence, and enterprise applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Key Metrics Section */}
      <Section className="bg-accent/30">
        <SectionHeader
          subtitle="Impact"
          title="Key Achievements"
          description="Measurable results from production AI systems"
          align="center"
        />
        <MetricGrid metrics={keyMetrics} className="max-w-4xl mx-auto" />
      </Section>

      {/* Experience Timeline */}
      <Section>
        <SectionHeader
          subtitle="Career"
          title="Work History"
          description="A timeline of my professional journey in AI and software engineering"
        />
        <ExperienceTimeline experiences={experiences} />
      </Section>

      {/* Call to Action */}
      <Section className="bg-accent/30">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m always open to discussing new opportunities in AI
              engineering and production systems development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
