"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NeonGridNavbar = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cyberpunk navigation items
  const navItems = [
    { name: "// HOME", path: "/", icon: "⊛" },
    { name: "// ABOUT", path: "/about", icon: "⟐" },
    { name: "// PROJECTS", path: "/projects", icon: "⌾" },
    { name: "// HISTORY", path: "/history", icon: "⍟" },
    { name: "// BLOG", path: "/blog", icon: "✦" },
    { name: "// CONTACT", path: "/contact", icon: "✜" },
  ];

  // Grid animation
  useEffect(() => {
    if (!isMobile && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 100;
      canvas.height = window.innerHeight;

      let frameCount = 0;
      const gridSize = 20;

      const drawGrid = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Animated grid lines
        ctx.strokeStyle = `rgba(100, 255, 255, ${
          Math.sin(frameCount * 0.05) * 0.1 + 0.05
        })`;
        ctx.lineWidth = 0.5;

        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Pulsing nodes
        ctx.fillStyle = `rgba(100, 255, 255, ${
          Math.abs(Math.sin(frameCount * 0.03)) * 0.3
        })`;
        for (let x = gridSize / 2; x < canvas.width; x += gridSize) {
          for (let y = gridSize / 2; y < canvas.height; y += gridSize) {
            const pulse =
              Math.sin(frameCount * 0.05 + x * 0.1 + y * 0.1) * 2 + 2;
            ctx.beginPath();
            ctx.arc(x, y, pulse, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        frameCount++;
        requestAnimationFrame(drawGrid);
      };

      drawGrid();
    }
  }, [isMobile]);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Mobile Toggle (Hologram Button) */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed z-50 left-4 top-4 p-3 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 shadow-lg hover:shadow-cyan-400/30 transition-all"
          aria-label="Menu"
        >
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute block w-full h-0.5 bg-cyan-400 rounded-full"
              animate={{
                y: menuOpen ? 6 : 0,
                rotate: menuOpen ? 45 : 0,
              }}
            />
            <motion.span
              className="absolute block w-full h-0.5 bg-cyan-400 rounded-full mt-2"
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="absolute block w-full h-0.5 bg-cyan-400 rounded-full mt-4"
              animate={{
                y: menuOpen ? -6 : 0,
                rotate: menuOpen ? -45 : 0,
              }}
            />
          </div>
        </button>
      )}

      {/* Animated Grid Background */}
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="fixed left-0 top-0 h-full w-[100px] z-30 pointer-events-none"
        />
      )}

      {/* Main Navbar */}
      <motion.nav
        initial={false}
        animate={{
          width: isMobile ? (menuOpen ? "280px" : "0px") : "100px",
          opacity: isMobile ? (menuOpen ? 1 : 0) : 1,
        }}
        className={`fixed left-0 top-0 h-full z-40 bg-black/70 backdrop-blur-lg border-r border-cyan-400/20 overflow-hidden ${
          !isMobile ? "shadow-[0_0_40px_rgba(100,255,255,0.1)]" : ""
        }`}
      >
        {/* Holographic Logo */}
        <div className="relative flex justify-center pt-8 pb-12">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative z-10 text-3xl font-mono font-bold text-cyan-400 bg-black/50 rounded-full w-16 h-16 flex items-center justify-center border border-cyan-400/30 shadow-lg"
          >
            RDNX
            <AnimatePresence>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.3, opacity: 0.3 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
                className="absolute inset-0 rounded-full border border-cyan-400"
              />
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Items */}
        <ul className="space-y-4 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`relative flex items-center ${
                  isMobile ? "justify-start pl-6" : "justify-center"
                } py-3 rounded-md group transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
                onMouseEnter={() => !isMobile && setIsHovered(item.path)}
                onMouseLeave={() => !isMobile && setIsHovered(null)}
              >
                {/* Hover Effect */}
                {isHovered === item.path && !isMobile && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-cyan-400/5 border border-cyan-400/20 rounded-md"
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}

                <span className="text-xl">{item.icon}</span>
                {isMobile && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-3 text-sm font-mono"
                  >
                    {item.name}
                  </motion.span>
                )}

                {/* Active Indicator */}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navActive"
                    className={`absolute ${
                      isMobile ? "left-2" : "-right-0.5"
                    } w-1 h-6 bg-cyan-400 rounded-full`}
                    transition={{ type: "spring", bounce: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Connection Status */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="flex items-center justify-center space-x-2 p-3 bg-black/50 rounded-md border border-cyan-400/30">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-400 font-mono">
              {isMobile ? "SYSTEM ONLINE" : "●"}
            </span>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Content Spacer */}
      <div
        className={`transition-all duration-300 ${
          isMobile ? "ml-0" : "ml-[100px]"
        }`}
      />
    </>
  );
};

export default NeonGridNavbar;
