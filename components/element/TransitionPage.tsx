"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const TransitionPage = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        animate={{
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        exit={{
          opacity: 0,
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Cyberpunk scanline effect */}
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "linear",
          }}
          className="fixed inset-0 z-50 pointer-events-none bg-[linear-gradient(to_bottom,rgba(100,255,255,0.1)_1px,transparent_1px)] bg-[length:100%_8px]"
        />

        {/* Digital noise overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 pointer-events-none bg-[url('/noise.png')] mix-blend-overlay"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
};
