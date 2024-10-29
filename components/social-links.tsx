"use client";

import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

const socials = [
  { icon: <GithubIcon className="w-5 h-5" />, url: "https://github.com" },
  { icon: <TwitterIcon className="w-5 h-5" />, url: "https://twitter.com" },
  { icon: <LinkedinIcon className="w-5 h-5" />, url: "https://linkedin.com" },
  { icon: <InstagramIcon className="w-5 h-5" />, url: "https://instagram.com" },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center space-x-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}