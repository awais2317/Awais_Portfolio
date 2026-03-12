"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Clock,
} from "lucide-react";

import { siteConfig } from "@/lib/data";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/**
 * Contact page with form and contact information
 */
export function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      description: "Best for detailed inquiries",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: siteConfig.phone,
      href: `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`,
      description: "Quick responses available",
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: "#",
      description: "Remote work worldwide",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      description: "Professional network",
    },
    {
      icon: Github,
      label: "GitHub",
      href: siteConfig.links.github,
      description: "Code repositories",
    },
    {
      icon: ExternalLink,
      label: "Upwork",
      href: siteConfig.links.upwork,
      description: "Freelance profile",
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
              Let&apos;s{" "}
              <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss AI engineering
              opportunities? I&apos;d love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Usually responds within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Grid */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionHeader
              subtitle="Message"
              title="Send a Message"
              description="Fill out the form and I'll get back to you as soon as possible."
            />
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <SectionHeader
              subtitle="Direct"
              title="Contact Information"
              description="Prefer to reach out directly? Here's how you can contact me."
            />

            <StaggerContainer className="space-y-4 mb-8">
              {contactMethods.map((method) => (
                <StaggerItem key={method.label}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{method.label}</div>
                          <div className="text-sm text-muted-foreground truncate">
                            {method.value}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground hidden sm:block">
                          {method.description}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Separator className="my-8" />

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Connect Online</h3>
              <StaggerContainer className="grid grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <StaggerItem key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-accent/50 transition-all duration-300">
                        <CardContent className="p-4 text-center">
                          <link.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="font-medium text-sm">{link.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {link.description}
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Availability Note */}
            <FadeIn delay={0.3}>
              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 animate-pulse" />
                    <div>
                      <div className="font-medium">Currently Available</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        I&apos;m open to new projects, consulting work, and
                        full-time opportunities in AI engineering.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Map/Location Section */}
      <Section className="bg-accent/30">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Working Globally
            </h2>
            <p className="text-muted-foreground mb-6">
              Based in Rawalpindi, Pakistan, but working with clients worldwide.
              Flexible timezone availability for international projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Americas (Overlap available)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Europe (Good overlap)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Asia Pacific (Same timezone)
              </span>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
