"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import type { LinkType } from "@/data/projects";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  const labels: Record<LinkType, string> = {
    github: p.code,
    demo: p.demo,
    appstore: p.appStore,
    playstore: p.playStore,
  };

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <SectionTitle number="03" title={p.title} />
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14" stagger={0.07}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} labels={labels} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
