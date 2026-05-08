import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Skill categories ────────────────────────────────────
const skillCategories = [
  {
    label: "Frontend",
    icon: "⚛️",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.06)",
    border: "rgba(6,182,212,0.15)",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    icon: "⚙️",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.15)",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.06)",
    border: "rgba(37,99,235,0.15)",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    label: "Marketing",
    icon: "📈",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
    skills: [
      "Meta Ads",
      "Social Media Marketing",
      "Content Strategy",
      "Branding",
      "Google Ads",
    ],
  },
  {
    label: "Tools",
    icon: "🛠️",
    color: "#10b981",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
    skills: ["GitHub", "VS Code", "Figma", "Canva", "Premiere Pro", "Postman"],
  },
];

function CategoryCard({ cat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4 }}
      className="h-full p-6 rounded-2xl"
      style={{
        background: cat.bg,
        border: `1px solid ${cat.border}`,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{cat.icon}</span>
        <h3
          className="text-lg font-bold font-display"
          style={{ color: cat.color }}
        >
          {cat.label}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.12 + i * 0.06 + 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200"
            style={{
              background: `${cat.color}18`,
              border: `1px solid ${cat.color}35`,
              color: cat.color,
              cursor: "default",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
      style={{ background: "rgba(10,15,30,0.4)" }}
    >
      {/* Accent orb */}
      <div className="orb w-[500px] h-[500px] bg-blue-700 bottom-[-150px] left-[-150px]" />

      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-purple-400 uppercase">
            What I work with
          </p>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-slate-400">
            A curated toolkit spanning full-stack development, cloud services,
            and digital marketing.
          </p>
        </motion.div>

        {/* Grid: 2 cols on md, 3 on xl */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
