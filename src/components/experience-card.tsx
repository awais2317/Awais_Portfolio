"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";

interface ExperienceProps {
  experience: {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    highlights?: {
      metric: string;
      label: string;
      description?: string;
    }[];
    achievements: string[];
    technologies: string[];
  };
  index?: number;
}

/**
 * Animated timeline dot component
 */
function TimelineDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.4,
        type: "spring",
        stiffness: 200 
      }}
      className="absolute left-0 md:left-8 top-8 -translate-x-1/2 hidden md:flex items-center justify-center z-10"
    >
      {/* Outer ring with pulse */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        className="absolute w-6 h-6 rounded-full bg-primary/30"
      />
      {/* Inner dot */}
      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />
    </motion.div>
  );
}

/**
 * Animated timeline line component
 */
function TimelineLine({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute left-0 md:left-8 top-0 bottom-0 -translate-x-1/2 hidden md:block">
      {/* Background line */}
      <div className="absolute inset-0 w-px bg-border/50" />
      {/* Animated fill line */}
      <motion.div 
        style={{ height }}
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-primary via-primary to-transparent"
      />
    </div>
  );
}

/**
 * Experience card with animated timeline connector
 */
export function ExperienceCard({ experience, index = 0 }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="relative"
    >
      {/* Timeline connector */}
      <TimelineLine index={index} />
      <TimelineDot index={index} />

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="ml-0 md:ml-16 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl md:text-2xl font-bold"
                >
                  {experience.title}
                </motion.h3>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium text-foreground">
                      {experience.company}
                    </span>
                  </div>
                  <span className="hidden md:inline">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
                <Badge variant="secondary">{experience.type}</Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Description */}
            <p className="text-muted-foreground">{experience.description}</p>

            {/* Metrics Grid with staggered animation */}
            {experience.highlights && experience.highlights.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {experience.highlights.map((highlight, idx) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.1, duration: 0.4 }}
                    className="p-4 rounded-xl bg-accent/50 text-center hover:bg-accent/70 transition-colors"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {highlight.metric}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-foreground mt-1">
                      {highlight.label}
                    </div>
                    {highlight.description && (
                      <div className="text-xs text-muted-foreground mt-0.5 hidden md:block">
                        {highlight.description}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
  );
}

/**
 * Timeline container for experience list
 */
export function ExperienceTimeline({
  experiences,
  className,
}: {
  experiences: ExperienceProps["experience"][];
  className?: string;
}) {
  return (
    <div className={cn("space-y-8", className)}>
      {experiences.map((experience, index) => (
        <ExperienceCard key={experience.id} experience={experience} index={index} />
      ))}
    </div>
  );
}
