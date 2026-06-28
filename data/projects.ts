export type LinkType = "github" | "demo" | "appstore" | "playstore";

export type ProjectLink = {
  type: LinkType;
  url: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Mobile Finance Tracker",
    description:
      "Günlük gelir/gider takibi yapan, gerçek zamanlı grafikler sunan cross-platform mobil uygulama. Expo ile geliştirildi, Supabase ile senkronize edildi.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "Zustand"],
    links: [
      { type: "github", url: "https://github.com/yourusername/finance-tracker" },
      { type: "playstore", url: "#" },
      { type: "appstore", url: "#" },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "Next.js 15, Tailwind CSS v4 ve TypeScript ile geliştirilmiş modern, koyu temalı kişisel portfolyo sitesi. Tamamen responsive.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    links: [
      { type: "github", url: "https://github.com/yourusername/portfolio" },
      { type: "demo", url: "#" },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Task Management REST API",
    description:
      "JWT kimlik doğrulama, rol tabanlı yetkilendirme ve PostgreSQL entegrasyonuyla ölçeklenebilir bir görev yönetim API'si.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    links: [
      { type: "github", url: "https://github.com/yourusername/task-api" },
    ],
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description:
      "Analitik, envanter yönetimi ve sipariş takibi içeren e-ticaret platformu yönetim paneli.",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "React Query"],
    links: [
      { type: "github", url: "https://github.com/yourusername/ecommerce-dashboard" },
      { type: "demo", url: "#" },
    ],
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "WebSocket tabanlı gerçek zamanlı sohbet uygulaması. Oda sistemi, özel mesajlaşma ve dosya paylaşımı destekliyor.",
    tags: ["React", "Socket.IO", "Node.js", "MongoDB"],
    links: [
      { type: "github", url: "https://github.com/yourusername/chat-app" },
      { type: "demo", url: "#" },
    ],
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description:
      "Konuma dayalı hava durumu tahminleri, interaktif haritalar ve hava uyarıları için push bildirimleri sunan mobil uygulama.",
    tags: ["React Native", "Expo", "OpenWeatherMap API", "TypeScript"],
    links: [
      { type: "github", url: "https://github.com/yourusername/weather-app" },
    ],
  },
];
