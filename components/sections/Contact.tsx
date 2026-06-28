"use client";

import { Mail, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import { FadeUp } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const SOCIALS = [
  { Icon: GitHubIcon,  href: "https://github.com/likosertugrul",    label: "GitHub"   },
  { Icon: LinkedInIcon, href: "https://linkedin.com/in/likosertugrul", label: "LinkedIn" },
  { Icon: XIcon,       href: "https://x.com/likosertugrul",          label: "X"        },
  { Icon: Mail,        href: "mailto:likosertugrul128@gmail.com",    label: "Email"    },
];

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="py-28 px-6 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <span
            className="font-mono text-sm tracking-widest uppercase"
            style={{ color: "var(--accent-soft)" }}
          >
            {c.subtitle}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-6"
            style={{ color: "var(--text)" }}
          >
            {c.title}
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            {c.body}
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <a
            href="mailto:likosertugrul128@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-200 hover:brightness-110 mb-14"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 0 0 var(--accent-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px var(--accent-muted)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <Mail size={20} />
            {c.cta}
          </a>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="flex items-center justify-center gap-4 mb-14">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-3 rounded-lg transition-all duration-200 hover:text-[var(--accent-soft)]"
                style={{ color: "var(--text-faint)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-muted)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <p
            className="text-sm flex items-center justify-center gap-1.5"
            style={{ color: "var(--text-faint)" }}
          >
            {c.by}{" "}
            <Heart size={12} className="fill-current" style={{ color: "var(--accent-soft)" }} />
            {" "}Ertuğrul Likos
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
