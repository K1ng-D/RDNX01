"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Project data
const projects = [
  {
    id: 1,
    title: "SECURE_AUTH_SYSTEM",
    year: "2023",
    role: "Fullstack Developer",
    subtitle: "Zero Trust Authentication Platform",
    description:
      "Developed a secure authentication system with biometric verification and behavioral analysis to prevent credential stuffing attacks.",
    image: "/projects/auth-system.jpg",
    techStack: ["Next.js", "Node.js", "Passport.js", "WebAuthn", "Redis"],
  },
  {
    id: 2,
    title: "CTF_CHALLENGE_PLATFORM",
    year: "2022",
    role: "Security Engineer",
    subtitle: "Custom CTF Infrastructure",
    description:
      "Built and deployed vulnerable-by-design applications for cybersecurity training with automated flag verification systems.",
    image: "/projects/ctf-platform.jpg",
    techStack: ["Docker", "Flask", "SQLi", "XSS", "JWT Exploits"],
  },
  {
    id: 3,
    title: "EDUCATIONAL_GAME",
    year: "2021",
    role: "Game Developer",
    subtitle: "Security Awareness Game",
    description:
      "Created an interactive game teaching phishing awareness and secure password practices using Python and Kivy framework.",
    image: "/projects/security-game.jpg",
    techStack: ["Python", "Kivy", "SQLite", "AES-256"],
  },
  {
    id: 4,
    title: "MIAW",
    year: "2021",
    role: "Game MIAW",
    subtitle: "Security Awareness Game",
    description:
      "Created an interactive game teaching phishing awareness and secure password practices using Python and Kivy framework.",
    image: "/projects/security-game.jpg",
    techStack: ["Python", "Kivy", "SQLite", "AES-256"],
  },
];

const CyberProjects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-black text-cyan-100 pt-24 pb-12 px-6 sm:px-8 lg:px-12">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6 text-cyan-400">
            <span className="text-white">$</span> PROJECT_ARCHIVE
          </h1>
          <div className="h-1 w-20 bg-cyan-400 mb-6"></div>
          <p className="font-mono text-cyan-300 max-w-3xl">
            // Collection of security-focused development projects and research
            initiatives
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                {/* Project image */}
                <div className="h-48 overflow-hidden bg-black/50">
                  <div className="h-full w-full bg-gradient-to-br from-black/80 to-cyan-900/30 absolute z-10"></div>
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-mono text-white">
                      {project.title}
                    </h3>
                    <span className="text-cyan-400/80 font-mono text-sm">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-cyan-400 font-mono text-sm mb-3">
                    {project.role}
                  </p>
                  <h4 className="text-white/80 font-mono text-sm mb-3">
                    {project.subtitle}
                  </h4>
                  <p className="text-cyan-100 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* View button */}
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-white transition-colors">
                    <span className="font-mono text-sm mr-2">VIEW_DETAILS</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative bg-black border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-cyan-400 hover:text-white z-10"
                >
                  <FaTimes className="text-xl" />
                </button>

                {/* Modal content */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image side */}
                  <div className="h-64 lg:h-full lg:min-h-[500px] bg-gradient-to-br from-black to-cyan-900/30 relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${selectedProject.image})`,
                      }}
                    ></div>
                  </div>

                  {/* Info side */}
                  <div className="p-8">
                    <div className="mb-6">
                      <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-mono text-white">
                          {selectedProject.title}
                        </h2>
                        <span className="text-cyan-400 font-mono">
                          {selectedProject.year}
                        </span>
                      </div>
                      <p className="text-cyan-400 font-mono mt-2">
                        {selectedProject.role}
                      </p>
                      <h3 className="text-white/90 text-lg mt-3">
                        {selectedProject.subtitle}
                      </h3>
                    </div>

                    <p className="text-cyan-100 mb-8">
                      {selectedProject.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-8">
                      <h4 className="font-mono text-white mb-3">TECH_STACK:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-4">
                      <button className="px-6 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 transition-colors font-mono">
                        VIEW_CODE
                      </button>
                      <button className="px-6 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-colors font-mono flex items-center">
                        LIVE_DEMO <FaExternalLinkAlt className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status bar */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center px-4 py-2 bg-black/70 border border-cyan-400/30 rounded-sm font-mono text-sm text-cyan-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            PROJECTS_LOADED: {projects.length} | STATUS: ONLINE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberProjects;
