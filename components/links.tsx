"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Globe, Linkedin, Mail, Youtube, ListChecks } from "lucide-react";
import { FaBehance,FaDribbble, FaTruckMoving} from "react-icons/fa";
import { SiRoadmapdotsh, SiIndeed } from "react-icons/si";
import Link from "next/link";

interface LinksProps {
  searchQuery: string;
}

const links = [
  {
    title: "Daily Checklists",
    url: "/dailychecklists",
    icon: ListChecks,
    style: "outline"
  },
  {
    title: "Road Maps",
    url: "/roadmaps",
    icon: SiRoadmapdotsh,
    style: "outline"
  },
  {
    title: "Captain Jay's Website",
    url: "https://www.captainjays.net/",
    icon: Globe,
    style: "outline"
  },
  {
    title: "DFD",
    url: "https://app.jotform.com/250266173293154",
    icon: FaTruckMoving,
    style: "outline"
  },
  {
    title: "Twitter",
    url: "https://x.com/DimuthNilanjana",
    icon: Twitter,
    style: "glass"
  },
  {
    title: "Indeed",
    url: "",
    icon: SiIndeed,
    style: "glass"
  },
 
  {
    title: "Contact Me",
    url: "",
    icon: Mail,
    style: "glass" //gradient
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Links({ searchQuery }: LinksProps) {
  const filteredLinks = links.filter(link =>
    link.title.toLowerCase().includes(searchQuery)
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {filteredLinks.map((link, index) => (
        <motion.div key={index} variants={item}>
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block w-full p-4 rounded-lg transition-all duration-200
              ${link.style === 'glass' ? 'bg-white/10 backdrop-blur-sm dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10' : ''}
              ${link.style === 'outline' ? 'border-2 border-primary hover:bg-primary/10' : ''}
              ${link.style === 'gradient' ? 'bg-gradient-to-r from-primary/80 via-primary to-primary/80 text-white hover:from-primary hover:via-primary/90 hover:to-primary' : ''}
              hover:scale-[1.02] active:scale-[0.98]
            `}
          >
            <div className="flex items-center space-x-3">
              <link.icon className="h-5 w-5" />
              <span className="font-medium">{link.title}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}