"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import { ProfileHeader } from "@/components/profile-header";
import { SocialLinks } from "@/components/social-links";
import { LinkCard } from "@/components/link-card";

const links = [
  {
    title: "My Personal Website",
    url: "https://example.com",
    icon: ExternalLinkIcon,
  },
  {
    title: "My Latest Blog Post",
    url: "https://example.com/blog",
    icon: ExternalLinkIcon,
  },
  {
    title: "My Portfolio",
    url: "https://example.com/portfolio",
    icon: ExternalLinkIcon,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col items-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <ProfileHeader
          imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop"
          name="John Doe"
          bio="Digital Creator & Developer"
        />
        
        <SocialLinks />

        <motion.div className="space-y-4">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}