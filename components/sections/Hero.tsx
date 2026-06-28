"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const blob1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Parallax glow blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          style={{ y: blob1Y, scale: blob1Scale, background: "radial-gradient(circle, var(--accent-muted) 0%, transparent 65%)" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl animate-glow-pulse"
        />
        <motion.div
          style={{ y: blob2Y, background: "radial-gradient(circle, var(--glow) 0%, transparent 65%)" }}
          className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]), background: "radial-gradient(circle, var(--glow) 0%, transparent 65%)" }}
          className="absolute top-2/3 right-1/4 w-[250px] h-[250px] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <p
          className="fade-up-0 font-mono text-sm md:text-base tracking-widest uppercase mb-6"
          style={{ color: "var(--accent-soft)" }}
        >
          {t.hero.greeting}
        </p>

        <h1
          className="fade-up-1 text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none"
          style={{ color: "var(--text)" }}
        >
          Ertuğrul{" "}
          <span
            className="bg-clip-text text-transparent animate-gradient-x"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--gr-from), var(--gr-via), var(--gr-to))",
              backgroundSize: "300% 300%",
            }}
          >
            Likos
          </span>
        </h1>

        <h2
          className="fade-up-2 text-xl md:text-2xl font-medium mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          {t.hero.role}
        </h2>

        <p
          className="fade-up-3 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {t.hero.bio}
        </p>

        <div className="fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-200 font-medium w-full sm:w-auto justify-center hover:brightness-110"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            <GitHubIcon size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 font-medium w-full sm:w-auto justify-center"
          >
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all duration-200 font-medium w-full sm:w-auto justify-center hover:brightness-110"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <Download size={18} /> {t.hero.cv}
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce hover:text-[var(--accent-soft)]"
        style={{ color: "var(--text-faint)" }}
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
