"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  metric: string;
  label: string;
  description?: string;
  index?: number;
}

interface MetricGridProps {
  metrics: {
    metric: string;
    label: string;
    description?: string;
  }[];
  className?: string;
}

/**
 * Individual metric display card with animation
 */
export function MetricCard({
  metric,
  label,
  description,
  index = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Gradient accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
          {metric}
        </div>
        <div className="text-base font-semibold text-foreground">{label}</div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Grid layout for multiple metrics
 */
export function MetricGrid({ metrics, className }: MetricGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
        className
      )}
    >
      {metrics.map((item, index) => (
        <MetricCard
          key={item.label}
          metric={item.metric}
          label={item.label}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
}

/**
 * Inline metric display for compact layouts
 */
export function InlineMetric({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-3 rounded-lg bg-accent/50",
        className
      )}
    >
      <span className="text-xl font-bold text-primary">{value}</span>
      <span className="text-xs text-muted-foreground text-center">{label}</span>
    </div>
  );
}
