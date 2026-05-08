import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Service cards data
const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, responsive, and performant websites built with React.js, Node.js, and best-in-class tooling — from landing pages to full web applications.",
    color: "#7c3aed",
    features: [
      "React / Next.js",
      "REST APIs",
      "Responsive Design",
      "SEO Optimized",
    ],
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Strategic social media management that builds brand identity, grows engaged communities, and converts followers into loyal customers.",
    color: "#2563eb",
    features: [
      "Content Calendars",
      "Organic Growth",
      "Community Mgmt",
      "Analytics Reports",
    ],
  },
  {
    icon: "📈",

    title: "Digital Marketing",

    desc: "Strategic digital marketing solutions focused on brand growth, audience engagement, social media management, and data-driven campaigns to increase online visibility and business performance.",

    color: "#06b6d4",

    features: [
      "Social Media Management",
      "Content Strategy",
      "Audience Growth",
      "Performance Analytics",
    ],
  },
  {
    icon: "✨",
    title: "Branding & Content Strategy",
    desc: "Cohesive brand identity development paired with a content strategy that communicates your unique value and resonates with your target market.",
    color: "#8b5cf6",
    features: [
      "Brand Identity",
      "Content Planning",
      "Copywriting",
      "Visual Consistency",
    ],
  },

  {
    icon: "🎬",
    title: "Video Editing",
    desc: "Professional video editing for reels, ads, testimonials, and brand content — optimized for each platform's format and algorithm.",
    color: "#ef4444",
    features: ["Premiere Pro", "Reels & Shorts", "Ad Creatives", ,],
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative flex flex-col overflow-hidden group p-7 rounded-2xl"
      style={{
        background: `${service.color}08`,
        border: `1px solid ${service.color}20`,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${service.color}15 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        className="inline-block mb-5 text-4xl"
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-white font-display">
        {service.title}
      </h3>

      {/* Description */}
      <p className="flex-1 mb-5 text-sm leading-relaxed text-slate-400">
        {service.desc}
      </p>

      {/* Features list */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((f) => (
          <span
            key={f}
            className="px-2.5 py-1 rounded-md text-xs font-mono"
            style={{
              background: `${service.color}12`,
              border: `1px solid ${service.color}25`,
              color: service.color,
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
        style={{ background: service.color }}
      />
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="relative overflow-hidden py-28">
      <div className="orb w-[400px] h-[400px] bg-violet-800 bottom-0 right-0" />

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
            What I offer
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-slate-400">
            From concept to conversion — comprehensive digital services tailored
            to your goals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-slate-400">
            Ready to start a project together?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block btn-primary"
          >
            Let's Work Together →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
