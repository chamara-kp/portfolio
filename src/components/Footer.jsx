import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/",
    label: "GitHub",
    color: "#94a3b8",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: FiTwitter,
    href: "https://twitter.com/",
    label: "Twitter",
    color: "#1da1f2",
  },
  {
    icon: FiInstagram,
    href: "https://instagram.com/",
    label: "Instagram",
    color: "#e1306c",
  },
  {
    icon: FiMail,
    href: "mailto:pathum@example.com",
    label: "Email",
    color: "#7c3aed",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: "#020617",
        borderTop: "1px solid rgba(124,58,237,0.1)",
      }}
    >
      {/* Orb accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-3 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4 text-2xl font-extrabold tracking-tight font-display">
              <span className="gradient-text">PC</span>
              <span className="ml-1 font-mono text-sm text-slate-400"></span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Full-Stack Developer & Digital Marketer. Building modern web
              applications and growing brands with strategic digital marketing.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 font-bold text-white font-display">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="font-mono text-sm transition-colors text-slate-500 hover:text-purple-400"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick list */}
          <div>
            <h4 className="mb-5 font-bold text-white font-display">Services</h4>
            <ul className="space-y-3 font-mono text-sm text-slate-500">
              {[
                "Website Development",
                "Social Media Marketing",
                "Meta Ads Management",
                "Video Editing",
                "Branding & Content",
              ].map((s) => (
                <li
                  key={s}
                  className="transition-colors cursor-default hover:text-purple-400"
                >
                  → {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8 bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="font-mono text-sm text-slate-600">
            © 2026 Pathum Chamara. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center rounded-lg w-9 h-9"
                style={{
                  background: `${social.color}10`,
                  border: `1px solid ${social.color}20`,
                  color: social.color,
                }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Built with */}
          <p className="font-mono text-xs text-slate-700">
            Built with React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
