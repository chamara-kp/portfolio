import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import profile from "../assets/profile.jpg";

// ─── Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20 top-[-150px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-150px]" />

      {/* Main Content */}
      <div className="relative z-10 grid items-center gap-12 px-6 pt-20 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Side */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="font-mono text-sm text-emerald-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="mb-4 text-5xl font-bold text-white md:text-6xl"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Pathum Chamara
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="text-xl font-semibold text-slate-300 md:text-2xl">
              Full-Stack Developer
            </span>

            <span className="text-2xl text-purple-400">&</span>

            <span className="text-xl font-semibold text-slate-300 md:text-2xl">
              Digital Marketer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl mb-10 text-lg leading-relaxed text-slate-400"
          >
            I build modern web applications and help brands grow with digital
            marketing. Turning ideas into impactful digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 font-medium text-white transition rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105"
            >
              View Projects
            </button>

            <button
              onClick={scrollToContact}
              className="px-6 py-3 font-medium text-white transition border rounded-full border-slate-600 hover:bg-slate-800"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={item} className="flex items-center gap-6">
            <span className="font-mono text-sm text-slate-600">Find me on</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition text-slate-400 hover:text-purple-400"
            >
              <FiGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition text-slate-400 hover:text-blue-400"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="transition text-slate-400 hover:text-cyan-400"
            >
              <FaFacebookF size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full w-72 h-72 md:w-80 md:h-80"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
          </div>

          {/* Rotating Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, #7c3aed, #2563eb, #06b6d4, #7c3aed)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#020617]" />
          </motion.div>

          {/* Profile Image */}
          <div
            className="relative z-10 overflow-hidden border-4 border-transparent rounded-full w-72 h-72 md:w-80 md:h-80"
            style={{
              background:
                "linear-gradient(#020617, #020617) padding-box, linear-gradient(135deg, #7c3aed, #2563eb) border-box",
            }}
          >
            <img
              src={profile}
              alt="Pathum Chamara"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-4 top-[30%] px-4 py-3 text-center rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
          >
            <p className="text-2xl font-bold text-purple-400">3+</p>

            <p className="text-xs text-slate-400">Years Experience</p>
          </motion.div>

          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -right-4 bottom-[25%] px-4 py-3 text-center rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
          >
            <p className="text-2xl font-bold text-blue-400">20+</p>

            <p className="text-xs text-slate-400">Projects Done</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute flex flex-col items-center gap-2 -translate-x-1/2 cursor-pointer bottom-8 left-1/2"
      >
        <span className="font-mono text-xs text-slate-600">scroll down</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FiArrowDown className="text-slate-600" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
