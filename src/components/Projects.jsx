import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const projects = [
  {
    title:
      " Modern food ordering platform with fast delivery and smooth user experience.",
    desc: "A modsern food ordering platform designed for fast and seamless online food purchasing. Features responsive UI, smooth navigation, and an engaging user experience for customers.",
    tech: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],

    image: p1,
    imagePlaceholder: "project1.jpg",
    color: "#7c3aed",
    emoji: "🧠",

    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Real-Time Event Countdown and Celebration Timer Platform",
    desc: "A modern real-time countdown web application built for events and celebrations. Features live timer updates, responsive design, and smooth animations for an engaging user experience.",
    tech: ["Html", "Css", "Js"],
    image: p2,
    imagePlaceholder: "project2.jpg",
    color: "#2563eb",
    emoji: "🚗",
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "2-Month Social Media Marketing Growth Campaign",
    desc: "A results-driven social media marketing project focused on increasing brand visibility, audience engagement, and business growth through strategic content planning, performance analysis, and targeted campaigns over a 2-month period.",

    tech: [
      "Meta Business Suite",
      "Facebook Marketing",
      "Content Strategy",
      "Analytics",
    ],
    image: p3,
    imagePlaceholder: "project3.jpg",
    color: "#06b6d4",
    emoji: "📣",
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "2-Month Social Media Marketing and optimizing Growth Campaign",
    desc: "A results-driven social media marketing project focused on increasing brand visibility, audience engagement, and business growth through strategic content planning, performance analysis, and targeted campaigns over a 2-month period",
    tech: [
      "Meta Business Suite",
      "Pinterest Marketing",
      "Content Strategy",
      "Analytics",
    ],
    image: p4,
    imagePlaceholder: "project4.jpg",
    color: "#8b5cf6",
    emoji: "💼",
    demo: "#",
    github: "#",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8 }}
      className="flex flex-col h-full overflow-hidden group glass-card"
    >
      {/* Image area */}
      <div
        className="relative flex items-center justify-center h-48 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
        }}
      >
        {/*
          ═══════════════════════════════════════════════
          REPLACE: Add project screenshots
          Path: src/assets/{project.imagePlaceholder}
          ═══════════════════════════════════════════════
        */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40">
            <span className="text-5xl">{project.emoji}</span>
            <span className="font-mono text-xs text-slate-500">
              {project.imagePlaceholder}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to top, ${project.color}40, transparent)`,
          }}
        />

        {/* Hover action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full backdrop-blur-sm"
            style={{
              background: project.color,
              boxShadow: `0 0 20px ${project.color}60`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors font-display group-hover:text-purple-300">
          {project.title}
        </h3>
        <p className="flex-1 mb-5 text-sm leading-relaxed text-slate-400">
          {project.desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
            style={{ color: project.color }}
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="orb w-[400px] h-[400px] bg-cyan-700 top-0 right-[-100px]" />

      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-purple-400 uppercase">
            What I've built
          </p>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="max-w-md text-slate-400">
              A selection of work that reflects my technical range and design
              sensibility.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
