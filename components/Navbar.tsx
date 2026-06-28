"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X as MenuClose, ChevronDown, Layers } from "lucide-react";
import { useTheme, type Theme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES, type Language } from "@/data/translations";

const THEME_CONFIGS: { id: Theme; bg: string; accent: string }[] = [
  { id: "dark",  bg: "#09090b", accent: "#8b5cf6" },
  { id: "light", bg: "#ffffff", accent: "#7c3aed" },
  { id: "warm",  bg: "#181614", accent: "#e07830" },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const themeLabels: Record<Theme, string> = {
    dark: t.themes.dark,
    light: t.themes.light,
    warm: t.themes.warm,
  };

  const current = THEME_CONFIGS.find((c) => c.id === theme) ?? THEME_CONFIGS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-200"
        style={{ color: "var(--text-muted)" }}
        aria-label={themeLabels[theme]}
        title={themeLabels[theme]}
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${current.bg} 30%, ${current.accent})`,
          }}
        />
        <Layers size={15} />
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-36 rounded-xl border shadow-xl overflow-hidden py-1 z-50"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          {THEME_CONFIGS.map((cfg) => (
            <button
              key={cfg.id}
              onClick={() => { setTheme(cfg.id); setOpen(false); }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors duration-150"
              style={{
                color: cfg.id === theme ? "var(--accent-soft)" : "var(--text-muted)",
                backgroundColor: cfg.id === theme ? "var(--accent-muted)" : undefined,
              }}
            >
              <span
                className="w-4 h-4 rounded-full border border-white/10 flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${cfg.bg} 30%, ${cfg.accent})`,
                }}
              />
              <span className="flex-1 text-left">{themeLabels[cfg.id]}</span>
              {cfg.id === theme && (
                <span className="text-xs opacity-80">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  const NAV_LINKS = [
    { label: t.nav.about,    href: "#about" },
    { label: t.nav.skills,   href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact,  href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b" : ""
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "var(--nav-bg)",
              borderColor: "var(--border)",
            }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-wider transition-colors duration-200"
          style={{ color: "var(--accent-soft)" }}
        >
          &lt;EL /&gt;
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent-soft)]"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </a>
          ))}

          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: "var(--text-muted)" }}
              aria-label="Select language"
            >
              <span>{currentLang.flag}</span>
              <span className="font-mono">{currentLang.code.toUpperCase()}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-44 rounded-xl border shadow-xl overflow-hidden py-1 z-50"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as Language);
                      setLangOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150"
                    style={{
                      color: l.code === lang ? "var(--accent-soft)" : "var(--text-muted)",
                      backgroundColor:
                        l.code === lang ? "var(--accent-muted)" : undefined,
                    }}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span className={l.code === lang ? "font-medium" : ""}>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme switcher */}
          <ThemeSwitcher />

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {t.nav.cta}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <MenuClose size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden border-t backdrop-blur-md"
          style={{
            backgroundColor: "var(--nav-bg)",
            borderColor: "var(--border)",
          }}
        >
          <nav className="flex flex-col px-6 py-5 gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium transition-colors hover:text-[var(--accent-soft)]"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </a>
            ))}
            <div
              className="pt-3 border-t flex flex-wrap gap-2"
              style={{ borderColor: "var(--border)" }}
            >
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as Language);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    color: l.code === lang ? "var(--accent-soft)" : "var(--text-muted)",
                    backgroundColor:
                      l.code === lang ? "var(--accent-muted)" : undefined,
                  }}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
