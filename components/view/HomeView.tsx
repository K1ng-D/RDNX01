"use client";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function CyberHome() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState("RDNX01");
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Cyberpunk title rotation
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => {
        setCurrentTitle((prev) =>
          prev === "RDNX01" ? "RAMDHANI HADI WINARNO" : "RDNX01"
        );
        setGlitchEffect(false);
      }, 300);
    }, 5000);

    return () => clearInterval(titleInterval);
  }, []);

  // Particle network effect
  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Cyberpunk color palette
      const colors = [
        "hsl(200, 100%, 60%)",
        "hsl(180, 100%, 60%)",
        "hsl(220, 100%, 60%)",
        "hsl(160, 100%, 60%)",
      ];

      class CyberParticle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        alpha: number;

        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.alpha = Math.random() * 0.5 + 0.1;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
          if (ctx) {
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        }
      }

      const particles: CyberParticle[] = [];
      const particleCount = Math.floor(
        (window.innerWidth * window.innerHeight) / 5000
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new CyberParticle());
      }

      const animate = () => {
        ctx.fillStyle = "rgba(10, 5, 20, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = particles[i].color.replace(
                ")",
                `, ${1 - distance / 150})`
              );
              ctx.lineWidth = 0.3;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Text glitch animation
  useEffect(() => {
    if (textRef.current) {
      const letters = "01!@#$%^&*()_+-=[]{}|;:,.<>?/";
      let interval: NodeJS.Timeout | null = null;
      const element = textRef.current;

      const animateText = () => {
        const originalText = currentTitle;
        let iteration = 0;

        clearInterval(interval!);

        interval = setInterval(() => {
          element.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

          if (iteration >= originalText.length) {
            clearInterval(interval!);
          }

          iteration += 1 / 3;
        }, 30);
      };

      if (glitchEffect) {
        animateText();
        setTimeout(() => {
          if (textRef.current) textRef.current.innerText = currentTitle;
        }, 300);
      }

      return () => clearInterval(interval!);
    }
  }, [currentTitle, glitchEffect]);

  return (
    <>
      <Head>
        <title>Cyber Portfolio | RDNX01</title>
        <meta
          name="description"
          content="Cybersecurity specialist and full-stack developer"
        />
      </Head>

      <main className="relative w-full h-screen overflow-hidden bg-black">
        {/* Cyber background canvas */}
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full z-0 opacity-80"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-1 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 text-white">
          {/* Animated title with cyber effect */}
          <div className="mb-8 text-center">
            <h1
              ref={textRef}
              data-value={currentTitle}
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter font-mono ${
                glitchEffect ? "text-cyan-400" : "text-white"
              } transition-colors duration-200`}
              style={{
                textShadow: "0 0 15px rgba(100, 255, 255, 0.7)",
                letterSpacing: "0.1em",
              }}
            >
              {currentTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-mono max-w-2xl mx-auto">
              <span className="text-cyan-400">$</span> FULL_STACK_DEV |
              PENTESTER | BUG_HUNTER | SECURITY_ENTUSIAST
            </p>
          </div>

          {/* Cyber buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <button
              onClick={() => router.push("/work")}
              className="px-8 py-3 rounded-sm bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-white transition-all duration-300 hover:scale-105 flex items-center group font-mono"
            >
              <span>VIEW_WORK</span>
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-3 rounded-sm bg-cyan-500/90 text-black hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center group font-mono"
            >
              <span>INIT_CONTACT</span>
              <svg
                className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>

          {/* Status bar */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="flex items-center px-4 py-2 bg-black/50 border border-cyan-400/30 rounded-sm font-mono text-xs text-cyan-300">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
              STATUS: ONLINE
              <span className="mx-2">|</span>
              LAST_UPDATE: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
