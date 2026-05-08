import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMessageCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  {
    icon: FiMail,
    label: "Email",
    value: "kchamara1017@gmail.com",
    href: "kchamara1017@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+94 76 991 8162",
    href: "tel:+94769918162",
    color: "#2563eb",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+94 76 991 8162",
    href: "https://wa.me/qr/FDYUW67VK7JSG1",
    color: "#25D366",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pathum",
    href: "https://www.linkedin.com/in/pethum-chamara-485a74238/",
    color: "#0077b5",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/pathum", // REPLACE with your GitHub URL
    href: "https://github.com/",
    color: "#94a3b8",
  },
];

export default function Contact() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // ── REPLACE: Connect to your backend / EmailJS / Formspree ──
    // Example with Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', ... })
    await new Promise((r) => setTimeout(r, 1500)); // Simulate network delay
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      style={{ background: "rgba(10,15,30,0.5)" }}
    >
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-purple-800 top-[-150px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-blue-800 bottom-[-100px] right-[-100px]" />

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
            Get in touch
          </p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-slate-400">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's build something great.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            <div className="p-6 mb-6 glass-card">
              <div className="flex items-center gap-3 mb-4">
                <FiMessageCircle className="text-purple-400" size={20} />
                <h3 className="text-lg font-bold text-white font-display">
                  Let's Talk
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Whether you need a website, a marketing strategy, or both — I'm
                here to help. Response time: within 24 hours.
              </p>
            </div>

            {contactDetails.map((detail, i) => (
              <motion.a
                key={detail.label}
                href={detail.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 cursor-pointer rounded-xl group"
                style={{
                  background: `${detail.color}08`,
                  border: `1px solid ${detail.color}20`,
                  textDecoration: "none",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-xl"
                  style={{
                    background: `${detail.color}15`,
                    border: `1px solid ${detail.color}30`,
                  }}
                >
                  <detail.icon size={18} color={detail.color} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono mb-0.5">
                    {detail.label}
                  </p>
                  <p className="text-sm font-medium transition-colors text-slate-200 group-hover:text-white">
                    {detail.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 glass-card">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-6 text-6xl">🎉</div>
                  <h3 className="mb-3 text-2xl font-bold text-white font-display">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400">
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-mono text-sm text-slate-400">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-mono text-sm text-slate-400">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block mb-2 font-mono text-sm text-slate-400">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 font-mono text-sm text-slate-400">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      rows={6}
                      className="resize-none form-input"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center w-full gap-3 py-4 text-lg font-bold text-white transition-all duration-300 rounded-xl font-display"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                      boxShadow: "0 0 40px rgba(124, 58, 237, 0.4)",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
