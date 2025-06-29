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
    <div className="min-h-screen bg-black text-cyan-100 pt-16 md:pt-24 pb-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28 2xl:px-32">
      {/* Responsive grid overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(100, 255, 255, 0.1) 0%, transparent 20%),
            linear-gradient(rgba(100, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(30px, 3vw, 50px) clamp(30px, 3vw, 50px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Responsive header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-4 md:mb-6 text-cyan-400">
            <span className="text-white">$</span> WHO_AM_I
            <span className="text-cyan-400">?</span>
          </h1>
          <div className="h-1 w-16 md:w-20 bg-cyan-400 mb-4 md:mb-6"></div>
        </motion.div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left column */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 border border-cyan-400/20 p-4 sm:p-5 md:p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <FaShieldAlt className="text-cyan-400 mr-2 sm:mr-3 text-lg sm:text-xl" />
                <h2 className="text-xl sm:text-2xl font-mono text-white">
                  SECURITY_PROFILE
                </h2>
              </div>
              <p className="text-cyan-100 font-mono leading-relaxed text-sm sm:text-base">
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
              className="bg-black/50 border border-cyan-400/20 p-4 sm:p-5 md:p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <FaCode className="text-cyan-400 mr-2 sm:mr-3 text-lg sm:text-xl" />
                <h2 className="text-xl sm:text-2xl font-mono text-white">
                  WORK_EXPERIENCE
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "Security Researcher Intern",
                    company: "Company XYZ | 2023",
                    description:
                      "Conducted vulnerability assessments, reported security flaws, and assisted in penetration testing engagements.",
                  },
                  {
                    title: "Freelance Web Developer",
                    company: "Self-Employed | 2021-Present",
                    description:
                      "Built secure web applications for clients while implementing security best practices and vulnerability testing.",
                  },
                  {
                    title: "Graphic Designer",
                    company: "Digital Agency ABC | 2020-2021",
                    description:
                      "Created visual assets and user interfaces while developing an interest in cybersecurity through web projects.",
                  },
                ].map((exp, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-cyan-400 pl-3 sm:pl-4"
                  >
                    <h3 className="text-lg sm:text-xl font-mono text-white">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-mono text-xs sm:text-sm">
                      {exp.company}
                    </p>
                    <p className="text-cyan-100 mt-1 sm:mt-2 text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div className="space-y-6 md:space-y-8">
            {/* My Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 border border-cyan-400/20 p-4 sm:p-5 md:p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <FaCode className="text-cyan-400 mr-2 sm:mr-3 text-lg sm:text-xl" />
                <h2 className="text-xl sm:text-2xl font-mono text-white">
                  MY_SKILLS
                </h2>
              </div>

              {[
                {
                  title: "FRONTEND",
                  icon: <FaCode className="mr-2" />,
                  skills: [
                    "Next.js",
                    "React",
                    "React Native",
                    "Framer Motion",
                    "Tailwind",
                    "Redux",
                    "Three.js",
                  ],
                },
                {
                  title: "BACKEND",
                  icon: <FaServer className="mr-2" />,
                  skills: [
                    "Node.js",
                    "Express.js",
                    "Prisma",
                    "MySQL",
                    "PostgreSQL",
                    "Firebase",
                    "MongoDB",
                    "Cloudinary",
                  ],
                },
                {
                  title: "CLOUD/DEVOPS",
                  icon: <FaCloud className="mr-2" />,
                  skills: ["GCP", "AWS", "Vercel", "Docker", "GitHub Actions"],
                },
                {
                  title: "GRAPHIC_DESIGN",
                  icon: <FaPalette className="mr-2" />,
                  skills: [
                    "Photoshop",
                    "Illustrator",
                    "After Effects",
                    "Premiere Pro",
                    "GIMP",
                    "Inkscape",
                  ],
                },
                {
                  title: "UTILITIES",
                  icon: <FaTools className="mr-2" />,
                  skills: [
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
                  ],
                },
              ].map((section, i) => (
                <div key={i} className="mb-4 sm:mb-6 last:mb-0">
                  <h3 className="text-base sm:text-lg font-mono text-cyan-400 mb-2 sm:mb-3 flex items-center">
                    {section.icon}
                    {section.title}:
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {section.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs sm:text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/50 border border-cyan-400/20 p-4 sm:p-5 md:p-6 rounded-sm shadow-lg shadow-cyan-400/10"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <FaPalette className="text-cyan-400 mr-2 sm:mr-3 text-lg sm:text-xl" />
                <h2 className="text-xl sm:text-2xl font-mono text-white">
                  EDUCATION
                </h2>
              </div>
              <div className="font-mono space-y-2 sm:space-y-3">
                <div>
                  <p className="text-white text-sm sm:text-base">
                    UNIVERSITAS_DUTA_BANGSA
                  </p>
                  <p className="text-cyan-300 text-xs sm:text-sm">
                    Computer Engineering (2021-Now)
                  </p>
                  <p className="text-cyan-400/80 text-xs">
                    // Research & Tech Division Lead
                  </p>
                </div>
                <div className="pt-1 sm:pt-2">
                  <p className="text-white text-sm sm:text-base">
                    SECURITY_TRAINING
                  </p>
                  <p className="text-cyan-300 text-xs sm:text-sm">
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
          className="mt-12 md:mt-16 bg-black/50 border border-cyan-400/20 p-6 md:p-8 rounded-sm"
        >
          <div className="flex items-start">
            <span className="text-cyan-400 font-mono mr-2">${">"}</span>
            <div>
              <h3 className="text-lg md:text-xl font-mono text-white mb-3 md:mb-4">
                MISSION_STATEMENT
              </h3>
              <p className="text-cyan-100 font-mono leading-relaxed text-sm md:text-base">
                My goal is to bridge development and security - creating robust
                systems that are both functionally elegant and fundamentally
                secure. I believe in ethical hacking as a force for good,
                constantly challenging systems to make them stronger. Currently
                focused on:
              </p>
              <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 font-mono text-sm md:text-base">
                {[
                  "Web application security hardening",
                  "Secure coding practices",
                  "Vulnerability research",
                  "Security education",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-cyan-400 mr-2">&gt;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Responsive status bar */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-black/70 border border-cyan-400/30 rounded-sm font-mono text-xs sm:text-sm text-cyan-300">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 mr-1.5 sm:mr-2 animate-pulse"></div>
            LAST_UPDATE: {new Date().toLocaleDateString()} | STATUS: ONLINE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberAbout;
