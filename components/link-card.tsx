"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: LucideIcon;
  index: number;
}

export function LinkCard({ title, url, icon: Icon, index }: LinkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <Button
          variant="ghost"
          className="w-full h-auto p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
          asChild
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full"
          >
            <span className="text-lg">{title}</span>
            <Icon className="w-4 h-4" />
          </a>
        </Button>
      </Card>
    </motion.div>
  );
}