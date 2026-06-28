import { ExternalLink, Apple, ShoppingBag } from "lucide-react";
import type { Project, LinkType } from "@/data/projects";
import { GitHubIcon } from "@/components/icons/SocialIcons";

type LinkLabels = Record<LinkType, string>;

const defaultLabels: LinkLabels = {
  github: "Code", demo: "Demo", appstore: "App Store", playstore: "Play Store",
};

const linkIcons: Record<LinkType, React.ElementType> = {
  github: GitHubIcon, demo: ExternalLink, appstore: Apple, playstore: ShoppingBag,
};

export default function ProjectCard({
  project,
  labels = defaultLabels,
}: {
  project: Project;
  labels?: LinkLabels;
}) {
  return (
    <article
      className="group relative flex flex-col p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card)";
      }}
    >
      {project.featured && (
        <span
          className="absolute top-4 right-4 px-2 py-0.5 text-xs font-mono rounded-full border"
          style={{
            color: "var(--featured-text)",
            backgroundColor: "var(--featured-bg)",
            borderColor: "var(--featured-border)",
          }}
        >
          featured
        </span>
      )}

      <h3
        className="font-semibold text-lg mb-2 pr-16 transition-colors duration-200 group-hover:text-[var(--accent-soft)]"
        style={{ color: "var(--text)" }}
      >
        {project.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-mono rounded-md border"
            style={{
              backgroundColor: "var(--tag-bg)",
              color: "var(--tag-text)",
              borderColor: "var(--tag-border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="flex items-center gap-4 pt-3 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {project.links.map(({ type, url }) => {
          const Icon = linkIcons[type];
          return (
            <a
              key={type}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-[var(--accent-soft)]"
              style={{ color: "var(--text-faint)" }}
            >
              <Icon size={14} />
              {labels[type]}
            </a>
          );
        })}
      </div>
    </article>
  );
}
