"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  perspective?: number;
  scale?: number;
  transitionDuration?: number;
}

/**
 * 3D Tilt effect card component
 * Creates a premium interactive tilt effect on hover
 */
export function TiltCard({
  children,
  className,
  tiltAmount = 10,
  perspective = 1000,
  scale = 1.02,
  transitionDuration = 0.3,
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    x.set(xPercent);
    y.set(yPercent);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale }}
        transition={{ duration: transitionDuration }}
        className="h-full"
      >
        {children}
        
        {/* Glare effect */}
        <motion.div
          style={{
            background: useTransform(
              [xSpring, ySpring],
              ([latestX, latestY]) =>
                `radial-gradient(circle at ${50 + (latestX as number) * 100}% ${
                  50 + (latestY as number) * 100
                }%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            ),
          }}
          className="absolute inset-0 rounded-xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Floating animation wrapper
 */
export function FloatingElement({
  children,
  className,
  duration = 3,
  distance = 10,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
