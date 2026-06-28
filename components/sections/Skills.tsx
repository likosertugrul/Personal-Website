"use client";

import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const translateCategory = (name: string) => {
    if (name === "Araçlar & DevOps" || name === "Tools & DevOps") return t.skills.tools;
    return name;
  };

  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <SectionTitle number="02" title={t.skills.title} />
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14" stagger={0.09}>
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.name}>
              <div
                className="h-full p-6 rounded-xl border transition-all duration-300 group"
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
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3
                    className="font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "var(--text)" }}
                  >
                    {translateCategory(cat.name)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default hover:text-[var(--accent-soft)] hover:border-[var(--border-accent)]"
                      style={{
                        backgroundColor: "var(--tag-bg)",
                        color: "var(--tag-text)",
                        borderColor: "var(--tag-border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
