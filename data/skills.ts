export type SkillCategory = {
  name: string;
  emoji: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    emoji: "🖥️",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    name: "Mobile",
    emoji: "📱",
    items: [
      "React Native",
      "Expo",
      "EAS Build",
      "Push Notifications",
      "AsyncStorage",
      "React Navigation",
    ],
  },
  {
    name: "Backend",
    emoji: "⚙️",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
  },
  {
    name: "Araçlar & DevOps",
    emoji: "🛠️",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Figma",
      "Jest",
      "Postman",
      "Linux",
    ],
  },
];
