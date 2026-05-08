import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Digital Marketing Agency Owner",
    company: "Self-Founded Agency",

    year: "2025 – Present",
    color: "#7c3aed",
    icon: "🚀",
    desc: "Founded and operate a boutique digital marketing agency serving local and international clients. Manage end-to-end campaign strategy, team coordination, and client relationships.",
    responsibilities: [
      "Lead strategy for Meta Ads, Instagram & Facebook campaigns",
      "Manage a team of content creators and ad specialists",
      "Handle client onboarding, reporting, and retention",
      "Grew client revenue through data-driven ad optimization",
    ],
  },
  {
    title: "Social Media Manager",
    company: "Freelance / Clients",
    year: "2022 – Present",
    color: "#2563eb",
    icon: "📱",
    desc: "Managed social media presence for multiple brands across different industries. Developed content calendars, executed campaigns, and analyzed performance metrics.",
    responsibilities: [
      "Content planning, creation, and scheduling",
      "Community management and engagement growth",
      "Performance analytics and monthly reporting",
      "Collaborated with designers for visual content",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Projects & Freelance",
    year: "2025 – Present",
    color: "#06b6d4",
    icon: "💻",
    desc: "Building end-to-end web applications using the MERN stack and Python frameworks. Focused on clean architecture, performance, and exceptional user experience.",
    responsibilities: [
      "Designed and built full-stack React + Node.js applications",
      "Integrated REST APIs and third-party services",
      "Database design with MongoDB and MySQL",
      "Deployed and maintained projects on cloud platforms",
    ],
  },
  {
    title: "Computer Science Undergraduate",
    company: "Sabaragamuwa University Of Sri Lanka",
    year: "2024 – Present",
    color: "#8b5cf6",
    icon: "🎓",
    desc: "Pursuing a degree in Computer Science with a strong focus on algorithms, data structures, software engineering, and emerging technologies in AI and cloud computing.",
    responsibilities: [
      "Core studies in algorithms, OS, networking, and databases",
      "Academic projects spanning multiple programming paradigms",
      "Active participant in tech clubs and hackathons",
      "Maintained strong academic standing while building real products",
    ],
  },
  {
    title: "Freelance Video Editor",

    company: "Fiverr & Independent Clients",

    year: "2021 – Present",

    color: "#ec4899",

    icon: "🎬",

    desc: "Experienced freelance video editor specializing in social media content, promotional videos, short-form reels, and cinematic edits using Adobe Premiere Pro and CapCut.",

    responsibilities: [
      "Edited engaging short-form content for social media platforms",

      "Created promotional and marketing videos for multiple clients",

      "Worked with Adobe Premiere Pro and CapCut for professional editing",

      "Managed freelance projects and client communication through Fiverr",
    ],
  },
];

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative pl-16"
    >
      {/* Timeline vertical line */}
      {index < experiences.length - 1 && <div className="timeline-line" />}

      {/* Icon circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="absolute top-0 left-0 z-10 flex items-center justify-center w-12 h-12 text-xl rounded-full"
        style={{
          background: `${exp.color}15`,
          border: `2px solid ${exp.color}`,
          boxShadow: `0 0 20px ${exp.color}30`,
        }}
      >
        {exp.icon}
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2 }}
        className="p-6 mb-8 glass-card"
        style={{ borderLeftColor: `${exp.color}40` }}
      >
        {/* Header row */}
        <div className="flex flex-col justify-between gap-2 mb-3 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              {exp.title}
            </h3>
            <p
              className="text-sm font-mono mt-0.5"
              style={{ color: exp.color }}
            >
              {exp.company}
            </p>
          </div>
          <span
            className="self-start inline-block px-3 py-1 font-mono text-xs rounded-full sm:self-auto"
            style={{
              background: `${exp.color}15`,
              border: `1px solid ${exp.color}30`,
              color: exp.color,
            }}
          >
            {exp.year}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          {exp.desc}
        </p>

        {/* Responsibilities */}
        <ul className="space-y-2">
          {exp.responsibilities.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: exp.color }}
              />
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28"
      style={{ background: "rgba(10,15,30,0.4)" }}
    >
      <div className="orb w-[400px] h-[400px] bg-purple-800 top-[-100px] left-[-100px]" />

      <div className="max-w-5xl px-6 mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-purple-400 uppercase">
            My journey
          </p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
