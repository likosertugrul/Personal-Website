"use client";

import Image from "next/image";
import { Code2, Smartphone, Globe, Coffee } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const stats = [
    { icon: Code2,       label: a.years,  sub: a.yearsLabel  },
    { icon: Smartphone,  label: a.mobile, sub: a.mobileLabel },
    { icon: Globe,       label: a.web,    sub: a.webLabel    },
    { icon: Coffee,      label: a.coffee, sub: a.coffeeLabel },
  ];

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <SectionTitle number="01" title={a.title} />
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-14">
          {/* Avatar */}
          <FadeLeft className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border"
                style={{ borderColor: "var(--border-accent)" }}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Ertuğrul Likos"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -inset-3 rounded-2xl border pointer-events-none"
                style={{ borderColor: "var(--border-accent)", opacity: 0.3 }}
              />
              <div
                className="absolute -inset-6 rounded-2xl border pointer-events-none"
                style={{ borderColor: "var(--border-accent)", opacity: 0.15 }}
              />
            </div>
          </FadeLeft>

          {/* Text + stats */}
          <FadeRight delay={0.1} className="space-y-8">
            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Merhaba! Ben{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent-soft)" }}
                >
                  Ertuğrul Likos
                </span>
                . {a.p1}
              </p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>

            <StaggerContainer className="grid grid-cols-2 gap-4" stagger={0.07}>
              {stats.map(({ icon: Icon, label, sub }) => (
                <StaggerItem key={label}>
                  <div
                    className="p-5 rounded-xl border transition-all duration-300 group cursor-default"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    <Icon
                      size={22}
                      className="mb-3 group-hover:scale-110 transition-transform duration-200"
                      style={{ color: "var(--accent-soft)" }}
                    />
                    <p
                      className="font-bold text-lg leading-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {sub}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
