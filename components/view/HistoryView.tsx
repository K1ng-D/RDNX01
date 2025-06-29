"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaBug, FaCertificate, FaTimes } from "react-icons/fa";

const CyberHistory = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Competition history data
  const competitions = [
    {
      id: 1,
      name: "National Cyber Security Challenge",
      year: "2023",
      position: "Top 10 Finalist",
      description:
        "National CTF competition with 500+ participants focusing on web exploitation and forensics",
    },
    {
      id: 2,
      name: "HackTheBox University CTF",
      year: "2022",
      position: "15th Place",
      description:
        "International university-level hacking competition with 300+ teams",
    },
    {
      id: 3,
      name: "Cyber Sea Game",
      year: "2021",
      position: "2nd Runner Up",
      description:
        "Regional cybersecurity competition focusing on network penetration testing",
    },
  ];

  // Bug bounty platforms
  const bountyPlatforms = [
    {
      name: "HackerOne",
      achievements: [
        "10+ valid vulnerabilities reported",
        "Top 100 researcher program",
      ],
    },
    {
      name: "Bugcrowd",
      achievements: [
        "5 critical vulnerabilities found",
        "Hall of fame in 3 programs",
      ],
    },
    {
      name: "Intigriti",
      achievements: [
        "3 XSS vulnerabilities reported",
        "Special recognition for reporting quality",
      ],
    },
  ];

  // Certificates
  const certificates = [
    { id: "cert1", title: "Certified Ethical Hacker", image: "/certs/ceh.jpg" },
    { id: "cert2", title: "eJPT Certified", image: "/certs/ejpt.jpg" },
    { id: "cert3", title: "HTB Certified Pentester", image: "/certs/htb.jpg" },
    { id: "cert4", title: "Bug Bounty Hunter", image: "/certs/bug-hunter.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-100 pt-16 md:pt-24 pb-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28 2xl:px-32">
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
            <span className="text-white">$</span> SECURITY_HISTORY
          </h1>
          <div className="h-1 w-20 bg-cyan-400 mb-6"></div>
          <p className="font-mono text-cyan-300 max-w-3xl">
            // Timeline of competitive achievements and recognized
            certifications
          </p>
        </motion.div>

        {/* Competition History */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <FaTrophy className="text-cyan-400 mr-3 text-2xl" />
            <h2 className="text-2xl font-mono text-white">CTF_COMPETITIONS</h2>
          </div>

          <div className="space-y-6">
            {competitions.map((comp) => (
              <div
                key={comp.id}
                className="border-l-2 border-cyan-400 pl-6 py-4 relative group"
              >
                <div className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-cyan-400"></div>
                <div className="absolute -left-px top-0 h-full w-0.5 bg-cyan-400/30 group-hover:bg-cyan-400/50 transition-colors"></div>

                <div className="bg-black/50 border border-cyan-400/20 p-6 hover:border-cyan-400/40 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-mono text-white">
                      {comp.name}
                    </h3>
                    <span className="text-cyan-400 font-mono">{comp.year}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono">
                      {comp.position}
                    </span>
                  </div>
                  <p className="text-cyan-100">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Bug Bounty Achievements */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <FaBug className="text-cyan-400 mr-3 text-2xl" />
            <h2 className="text-2xl font-mono text-white">BUG_BOUNTY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bountyPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-black/50 border border-cyan-400/20 p-6 hover:border-cyan-400/40 transition-colors"
              >
                <h3 className="text-xl font-mono text-white mb-4">
                  {platform.name}
                </h3>
                <ul className="space-y-2">
                  {platform.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">✓</span>
                      <span className="text-cyan-100">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certificates */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <FaCertificate className="text-cyan-400 mr-3 text-2xl" />
            <h2 className="text-2xl font-mono text-white">CERTIFICATIONS</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => setSelectedCert(cert.image)}
              >
                <div className="bg-black/50 border border-cyan-400/20 aspect-[4/3] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${cert.image})` }}
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                    <p className="text-white font-mono text-sm truncate">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-10 right-0 text-cyan-400 hover:text-white z-10"
                >
                  <FaTimes className="text-2xl" />
                </button>
                <div className="bg-black border border-cyan-400/30 p-1">
                  <img
                    src={selectedCert}
                    alt="Certificate"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status bar */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center px-4 py-2 bg-black/70 border border-cyan-400/30 rounded-sm font-mono text-sm text-cyan-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            COMPETITIONS: {competitions.length} | BOUNTIES:{" "}
            {bountyPlatforms.length} | CERTS: {certificates.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberHistory;
