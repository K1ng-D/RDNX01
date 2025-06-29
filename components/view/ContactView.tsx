"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const CyberContact = () => {
  const contacts = [
    {
      icon: <SiGmail className="text-2xl" />,
      name: "Email",
      value: "rdhwinarno@gmail.com",
      url: "mailto:rdhwinarno@gmail.com",
      color: "bg-red-500/20 border-red-500/50 hover:bg-red-500/30",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      value: "RDNX01",
      url: "https://github.com/RDNX01",
      color: "bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      value: "Ramdhani Hadi Winarno",
      url: "https://linkedin.com/in/yourusername",
      color: "bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      name: "Instagram",
      value: "@rdhwinarno",
      url: "https://instagram.com/rdhwinarno",
      color: "bg-pink-500/20 border-pink-500/50 hover:bg-pink-500/30",
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      name: "Facebook",
      value: "Ramdhani Hadi Winarno",
      url: "https://facebook.com/yourusername",
      color: "bg-indigo-500/20 border-indigo-500/50 hover:bg-indigo-500/30",
    },
    {
      icon: <FaTelegram className="text-2xl" />,
      name: "Telegram",
      value: "@rdhwinarno",
      url: "https://t.me/rdhwinarno",
      color: "bg-cyan-500/20 border-cyan-500/50 hover:bg-cyan-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-100 pt-24 pb-12 px-6 sm:px-12 lg:px-24">
      {/* Circuit board overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6 text-cyan-400">
            <span className="text-white">$</span> CONNECT_WITH_ME
          </h1>
          <div className="h-1 w-20 bg-cyan-400 mb-6 mx-auto"></div>
          <p className="font-mono text-cyan-300 max-w-2xl mx-auto">
            // Let's collaborate on security projects or discuss new
            opportunities
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 border rounded-sm flex flex-col items-center text-center ${
                contact.color
              } transition-colors hover:shadow-lg hover:shadow-${
                contact.color.split("/")[0]
              }-500/20`}
            >
              <div className="mb-4 p-3 bg-black/50 rounded-full border border-current">
                {contact.icon}
              </div>
              <h3 className="text-xl font-mono text-white mb-2">
                {contact.name}
              </h3>
              <p className="text-cyan-100 font-mono">{contact.value}</p>
              <div className="mt-4 h-0.5 w-16 bg-current opacity-50"></div>
            </motion.a>
          ))}
        </div>

        {/* Status bar */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center px-4 py-2 bg-black/70 border border-cyan-400/30 rounded-sm font-mono text-sm text-cyan-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            CONNECTIONS_ACTIVE | STATUS: ONLINE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberContact;
