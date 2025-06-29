"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const CyberFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-t from-black/80 to-transparent pt-20 pb-10 overflow-hidden border-t border-cyan-400/20">
      {/* Cyber grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Identity section */}
          <div className="md:col-span-2">
            <motion.h3
              className="text-2xl font-bold text-white mb-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-400">$</span> RAMDHANI_HADI_WINARNO
              <span className="text-cyan-400">:</span>RDNX01
            </motion.h3>
            <motion.p
              className="text-cyan-300 max-w-md font-mono text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              // FULL_STACK_DEV | PENTESTER | BUG_HUNTER | SECURITY_ENTUSIAST
            </motion.p>
          </div>

          {/* Quick links */}
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-mono text-cyan-400">NAVIGATION</h4>
            {["Home", "About", "Project", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-cyan-200 hover:text-white font-mono text-sm transition-colors duration-300"
              >
                &gt; {item.toUpperCase()}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-cyan-400/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            <p className="text-cyan-300/80 text-xs font-mono">
              © {currentYear} RDNX01. ALL_RIGHTS_RESERVED
            </p>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            {[
              { icon: <FaGithub className="text-lg" />, name: "GitHub" },
              { icon: <FaLinkedin className="text-lg" />, name: "LinkedIn" },
              { icon: <FaTwitter className="text-lg" />, name: "Twitter" },
              { icon: <FaDiscord className="text-lg" />, name: "Discord" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={`https://${platform.name.toLowerCase()}.com/yourusername`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white p-2 rounded-sm border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                aria-label={platform.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {platform.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default CyberFooter;
