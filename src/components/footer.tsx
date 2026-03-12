"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin, ExternalLink } from "lucide-react";

import { siteConfig, navLinks } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

/**
 * Footer component with contact info and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: siteConfig.links.github,
      icon: Github,
    },
    {
      name: "Upwork",
      href: siteConfig.links.upwork,
      icon: ExternalLink,
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="gradient-text">
                {siteConfig.name.split(" ")[0]}
              </span>
              <span className="text-muted-foreground font-normal">.dev</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-1 mt-4 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            AI Engineer · Building Intelligent Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
