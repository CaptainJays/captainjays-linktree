"use client";

import { motion } from "framer-motion";
import { Clock4, CircleDollarSign, Globe, File, FileUser, Mail,  ScrollText, ListChecks } from "lucide-react";
import { FaBehance,FaDribbble, FaTruckMoving} from "react-icons/fa";
import { SiRoadmapdotsh, SiDoordash, SiUbereats } from "react-icons/si";
import { PiExamBold } from "react-icons/pi";
import { TbBrandPepsi } from "react-icons/tb";
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
    title: "Captain Jays Exams",
    url: "https://app.jotform.com/250494972265163",
    icon: PiExamBold,
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
    title: "Pepsi",
    url: "https://www.mypepsicoview.com/personaWeb/civ_user/",
    icon: TbBrandPepsi,
    style: "outline"
  },
  {
    title: "Doordash",
    url: "https://identity.doordash.com/auth?client_id=1643580605860775164&redirect_uri=https%3A%2F%2Fmerchant-portal.doordash.com%2Fauth_callback&scope=*&prompt=none&response_type=code&layout=merchant_web_v2&state=abd230e6-1bfb-49c2-8bde-6a5f95e8592a&allowRedirect=true&failureRedirect=%2Fmerchant%2Flogin",
    icon: SiDoordash,
    style: "outline"
  },
  {
    title: "Uber Eats",
    url: "",
    icon: SiUbereats,
    style: "glass"
  },
  {
    title: "Venture",
    url: "https://vns.prismhr.com/vns/",
    icon: CircleDollarSign,
    style: "glass"
  },
  {
    title: "Time Clock",
    url: "https://www.swipeclock.com/pg/Login.aspx?why=notloggedin&",
    icon: Clock4,
    style: "glass"
  },
  {
    title: "Team Member Applications",
    url: "https://mega.nz/file/bFgh2RYR#rvz62tgT_b0X4dhIJoP8jBj1Z4kmM_T9dv1CZ_WYaQ4",
    icon: FileUser,
    style: "glass"
  },
  {
    title: "Employee Guidelines",
    url: "https://mega.nz/file/SQYGHLzD#ZQR7CPr4Ouj-r_L2PfxdpFsgxpj5Scejl5l5l0aSGg8",
    icon: ScrollText,
    style: "glass"
  },
  {
    title: "Insurance Report",
    url: "https://mega.nz/file/3UwS1QIC#BjCdHHTWXFxQbT6QFn6d4AtFA4DesszsBSR41IaR1sE",
    icon: ScrollText,
    style: "glass"
  },
  {
    title: "Incident Report",
    url: "https://mega.nz/file/LYJBwa7Z#22YWRd5HT54of4bbHNTbasJ3MnyGzi-8OVKAG4PmAz0",
    icon: ScrollText,
    style: "glass"
  },
  {
    title: "Employee Incident Report",
    url: "https://mega.nz/file/PY5T3LqY#tUSyGwmgMb144vzC1wDCIcC14QWXX2MYQ-qEsuKvAgo", 
    icon: ScrollText,
    style: "glass"
  },
  {
    title: "Customer Report",
    url: "",
    icon: ScrollText,
    style: "glass"
  },
  {
    title: "Hr Documents",
    url: "/hrdoc",
    icon: File,
    style: "outline" //gradient
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