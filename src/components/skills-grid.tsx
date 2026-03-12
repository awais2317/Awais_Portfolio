"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Server,
  Database,
  Cpu,
  Cloud,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Server,
  Database,
  Cpu,
  Cloud,
};

interface SkillCategoryProps {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: string;
  }[];
  index?: number;
}

/**
 * Skill level badge with appropriate styling
 */
function SkillLevelBadge({ level }: { level: string }) {
  const variants: Record<string, string> = {
    Expert: "bg-primary/20 text-primary border-primary/30",
    Advanced: "bg-chart-2/20 text-chart-2 border-chart-2/30",
    Intermediate: "bg-chart-4/20 text-chart-4 border-chart-4/30",
  };

  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-normal", variants[level] || "")}
    >
      {level}
    </Badge>
  );
}

/**
 * Individual skill category card
 */
export function SkillCategory({
  category,
  icon,
  skills,
  index = 0,
}: SkillCategoryProps) {
  const Icon = iconMap[icon] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{category}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between gap-2"
              >
                <span className="text-sm text-muted-foreground">
                  {skill.name}
                </span>
                <SkillLevelBadge level={skill.level} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * Grid layout for skill categories
 */
export function SkillsGrid({
  skills,
  className,
}: {
  skills: Record<
    string,
    {
      icon: string;
      skills: { name: string; level: string }[];
    }
  >;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {Object.entries(skills).map(([category, data], index) => (
        <SkillCategory
          key={category}
          category={category}
          icon={data.icon}
          skills={data.skills}
          index={index}
        />
      ))}
    </div>
  );
}

/**
 * Compact inline skills display
 */
export function SkillTags({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="font-normal">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
