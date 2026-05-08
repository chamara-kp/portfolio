import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiTrendingUp, FiCpu, FiUsers } from "react-icons/fi";

// Trait cards
const traits = [
  {
    icon: FiCode,
    title: "Developer",
    desc: "Building scalable, performant web applications with modern technologies from front to back.",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    icon: FiTrendingUp,
    title: "Marketer",
    desc: "Crafting data-driven digital marketing strategies that grow brands and convert audiences.",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.2)",
  },
  {
    icon: FiCpu,
    title: "Problem Solver",
    desc: "Approaching complex challenges with systematic thinking and creative solutions.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: FiUsers,
    title: "Team Leader",
    desc: "Leading cross-functional teams and managing client relationships with clarity and empathy.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
];

//  Reveal animation hook
function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      {/* Orb accent */}
      <div className="orb w-[400px] h-[400px] bg-purple-700 top-[-100px] right-[-150px]" />

      <div className="px-6 mx-auto max-w-7xl">
        {/* Section header */}
        <FadeInWhenVisible>
          <div className="mb-16">
            <p className="mb-3 font-mono text-sm tracking-widest text-purple-400 uppercase">
              Get to know me
            </p>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/*  bio text */}
          <div>
            <FadeInWhenVisible delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                I'm{" "}
                <span className="font-semibold text-white">Pathum Chamara</span>
                , a Computer Science undergraduate passionate about the
                intersection of technology and business. I combine deep computer
                science knowledge with hands-on full-stack development
                experience to build applications that solve real problems.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="mb-6 text-base leading-relaxed text-slate-400">
                Beyond code, I run a small{" "}
                <span className="font-medium text-purple-400">
                  digital marketing agency
                </span>
                , where I help brands establish their online presence through
                strategic Meta Ads, social media campaigns, and compelling
                content. This dual expertise in development and marketing gives
                me a unique perspective on building products that not only work
                beautifully — but also reach the right audience.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <p className="mb-10 text-base leading-relaxed text-slate-400">
                I thrive on project management and client handling, ensuring
                deliverables are on time, on brief, and beyond expectations.
                Whether it's architecting a backend system, building a React UI,
                or launching a paid ads campaign — I bring the same dedication
                to craft and results.
              </p>
            </FadeInWhenVisible>

            {/* Stats row */}
            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "20+", label: "Projects Completed" },
                  { value: "18+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold gradient-text font-display">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right: trait cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {traits.map((trait, i) => (
              <FadeInWhenVisible key={trait.title} delay={0.15 * i}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="h-full p-6 rounded-2xl"
                  style={{
                    background: trait.bg,
                    border: `1px solid ${trait.border}`,
                  }}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                    style={{
                      background: `${trait.color}20`,
                      border: `1px solid ${trait.color}30`,
                    }}
                  >
                    <trait.icon size={22} color={trait.color} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white font-display">
                    {trait.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {trait.desc}
                  </p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
