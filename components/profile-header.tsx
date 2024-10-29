"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  imageUrl: string;
  name: string;
  bio: string;
}

export function ProfileHeader({ imageUrl, name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <Avatar className="w-24 h-24 border-4 border-primary/10">
          <img
            src={imageUrl}
            alt={name}
            className="rounded-full object-cover"
          />
        </Avatar>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-muted-foreground">{bio}</p>
      </motion.div>
    </div>
  );
}