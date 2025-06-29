"use client";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCode,
  FaServer,
  FaCloud,
  FaPalette,
  FaTools,
} from "react-icons/fa";

const CyberAbout = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-100 pt-24 pb-12 px-6 md:px-10 sm:px-12 lg:px-24">
      {/* Hex grid overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(100, 255, 255, 0.1) 0%, transparent 20%),
            linear-gradient(rgba(100, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 40px 40px, 40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6 text-cyan-400">
            <span className="text-white">$</span> WHO_AM_I
            <span className="text-cyan-400">?</span>
          </h1>
          <div className="h-1 w-20 bg-cyan-400 mb-6"></div>
        </motion.div>

        {/* Bio section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 border border-cyan-400/20 p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-cyan-400 mr-3 text-xl" />
                <h2 className="text-2xl font-mono text-white">
                  SECURITY_PROFILE
                </h2>
              </div>
              <p className="text-cyan-100 font-mono leading-relaxed">
                <span className="text-cyan-400">//</span> RAMDHANI HADI WINARNO
                [RDNX01]
                <br />
                <span className="text-cyan-400">//</span> FULLSTACK_DEV |
                PENTESTER | BUG_HUNTER
                <br />
                <span className="text-cyan-400">//</span> BORN: 2001-12-03
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/50 border border-cyan-400/20 p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-cyan-400 mr-3 text-xl" />
                <h2 className="text-2xl font-mono text-white">
                  WORK_EXPERIENCE
                </h2>
              </div>

              <div className="space-y-6">
                {/* Experience 1 */}
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h3 className="text-xl font-mono text-white">
                    Security Researcher Intern
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm">
                    Company XYZ | 2023
                  </p>
                  <p className="text-cyan-100 mt-2">
                    Conducted vulnerability assessments, reported security
                    flaws, and assisted in penetration testing engagements.
                  </p>
                </div>

                {/* Experience 2 */}
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h3 className="text-xl font-mono text-white">
                    Freelance Web Developer
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm">
                    Self-Employed | 2021-Present
                  </p>
                  <p className="text-cyan-100 mt-2">
                    Built secure web applications for clients while implementing
                    security best practices and vulnerability testing.
                  </p>
                </div>

                {/* Experience 3 */}
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h3 className="text-xl font-mono text-white">
                    Graphic Designer
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm">
                    Digital Agency ABC | 2020-2021
                  </p>
                  <p className="text-cyan-100 mt-2">
                    Created visual assets and user interfaces while developing
                    an interest in cybersecurity through web projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div className="space-y-8">
            {/* My Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 border border-cyan-400/20 p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-cyan-400 mr-3 text-xl" />
                <h2 className="text-2xl font-mono text-white">MY_SKILLS</h2>
              </div>

              {/* Frontend */}
              <div className="mb-6">
                <h3 className="text-lg font-mono text-cyan-400 mb-3">
                  FRONTEND:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "React Native",
                    "Framer Motion",
                    "Tailwind",
                    "Redux",
                    "Three.js",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <h3 className="text-lg font-mono text-cyan-400 mb-3">
                  BACKEND:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "Prisma",
                    "MySQL",
                    "PostgreSQL",
                    "Firebase",
                    "MongoDB",
                    "Cloudinary",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud */}
              <div className="mb-6">
                <h3 className="text-lg font-mono text-cyan-400 mb-3">
                  CLOUD/DEVOPS:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["GCP", "AWS", "Vercel", "Docker", "GitHub Actions"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Graphic Design */}
              <div className="mb-6">
                <h3 className="text-lg font-mono text-cyan-400 mb-3">
                  GRAPHIC_DESIGN:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Photoshop",
                    "Illustrator",
                    "After Effects",
                    "Premiere Pro",
                    "GIMP",
                    "Inkscape",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Utilities */}
              <div>
                <h3 className="text-lg font-mono text-cyan-400 mb-3">
                  UTILITIES:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "GitHub",
                    "VS Code",
                    "Postman",
                    "Kali Linux",
                    "Figma",
                    "OpenAI",
                    "Deepseek",
                    "Burp Suite",
                    "Metasploit",
                    "Linux",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/50 border border-cyan-400/20 p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-4">
                <FaPalette className="text-cyan-400 mr-3 text-xl" />
                <h2 className="text-2xl font-mono text-white">EDUCATION</h2>
              </div>
              <div className="font-mono space-y-3">
                <div>
                  <p className="text-white">UNIVERSITAS_DUTA_BANGSA</p>
                  <p className="text-cyan-300">
                    Computer Engineering (2021-Now)
                  </p>
                  <p className="text-cyan-400/80 text-sm">
                    // Research & Tech Division Lead
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-white">SECURITY_TRAINING</p>
                  <p className="text-cyan-300">
                    CTFs, Pentesting Labs, Bug Bounties
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-black/50 border border-cyan-400/20 p-8 rounded-sm"
        >
          <div className="flex items-start">
            <span className="text-cyan-400 font-mono mr-2">${">"}</span>
            <div>
              <h3 className="text-xl font-mono text-white mb-4">
                MISSION_STATEMENT
              </h3>
              <p className="text-cyan-100 font-mono leading-relaxed">
                My goal is to bridge development and security - creating robust
                systems that are both functionally elegant and fundamentally
                secure. I believe in ethical hacking as a force for good,
                constantly challenging systems to make them stronger. Currently
                focused on:
              </p>
              <ul className="mt-4 space-y-2 font-mono">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">&gt;</span> Web
                  application security hardening
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">&gt;</span> Secure coding
                  practices
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">&gt;</span> Vulnerability
                  research
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">&gt;</span> Security
                  education
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Status bar */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center px-4 py-2 bg-black/70 border border-cyan-400/30 rounded-sm font-mono text-sm text-cyan-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            LAST_UPDATE: {new Date().toLocaleDateString()} | STATUS: ONLINE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberAbout;
